import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokedexIdPage.css'



  const PokeIdPage = () => {
  const {id} = useParams()
  
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon] = useFetch(url)
 
      
  useEffect(()=>{
    getSinglePokemon()
  },[id])

  const navigate = useNavigate
  const handleClick=()=>{
    navigate(`/pokedex/${pokemon.id}`)
  }


  const firstType=pokemon?.types[0].type.name

  return (
    <>
      <header className="black-header">
        <div className="red-header"></div>
      </header>
     <article className={`pokecard2 ${firstType}-border`} onClick={handleClick}>
     <header className={`pokecard__header2 ${firstType}-gradient`}>
     <img className="pokecard__image2" src={pokemon?.sprites.other['official-artwork'].front_default} 
     alt=""
      /> 
      </header>
      <section className="pokecard__body2">
     <h2 className={`pokecard__name ${firstType}-color`}>{pokemon?.name}</h2>

<hr className="pokecard__hr"/>
<h2>Stats</h2>

<ul className="pokecard__stats2">
  {

  pokemon?.stats.map(statInfo=>(
    <li className="pokecard__stat2" key={statInfo.stat.url}>
      <h4 className="pokecard__stat__name2">{statInfo.stat.name}</h4>
      <span className={`pokecard__stat__value2 ${firstType}-color`}>{statInfo.base_stat}</span>

    </li>
  ))
  }
  </ul>
  
  </section>

  <h2>Movements</h2>

  <ul className="pokecard__types">
          {pokemon?.moves.map((move) => (
            <li
              className="pokecard__typename"
              key={move.move.name}
            >
              {move.move.name}
            </li>
          ))}
        </ul>

      </article>
    </>
  )
}

export default PokeIdPage