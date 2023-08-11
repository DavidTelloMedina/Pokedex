import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({setSelectValue}) => {

  const url = 'https://pokeapi.co/api/v2/type'
  
  const [types,getAllTypes]= useFetch(url)

  useEffect(()=>{
    getAllTypes()
  }, [])

  const handleChange = e =>{
    setSelectValue(e.target.value)
  }
  
  return (
    <select className="btn__sele" onChange={handleChange}>
      <option className="btn__opt" value="allPokemons">All Pokemons</option>
    {
      types?.results.map(type => (
        <option key={type.url} value={type.url}>{type.name}</option>
      ))
    }
    </select>
  )
}

export default SelectType