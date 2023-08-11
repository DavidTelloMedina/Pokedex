import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef } from "react"
import PokeCard from "../components/Pokede/PokeCard"
import { useState } from "react"
import SelectType from "../components/Pokede/SelectType"
import './styles/PokedexPage.css'

  
  const PokedexPage = () => {

  const [inputValue, setInputValue] = useState ('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer=>reducer.trainer)
  
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50'

  const [pokemons,getAllPokemons,getPokemonsByType]= useFetch(url)

     

  useEffect(()=>{
    if(selectValue==='allPokemons'){
    getAllPokemons()
    }else{
      getPokemonsByType(selectValue)
    }
  },[selectValue])

  const inputSearch =useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  const cbfilter= poke => poke.name.includes(inputValue)

  return (
    <>
    <header className="black-header">
    <div className="red-header"></div>
  </header>
   <div className="container"> 
    
      <p><span className="trainer">Welcome {trainer}</span>, here you can find your favorite Pokemon.
      </p>
      <form onSubmit={handleSubmit} className="btn__form">
      <input className="btn__input__card" ref={inputSearch} type="text"/>
      <button className="btn__search">Search</button>
      </form>

      <SelectType setSelectValue={setSelectValue} />

      <div className="poke-container">
        {
          pokemons?.results.filter(cbfilter).map(poke=> (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))

        }
     </div>

    </div>
    </>
  )
      }

export default PokedexPage