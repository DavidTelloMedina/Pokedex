import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"

  const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()
    //e.target.inputTrainer.value
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
  <>
   <div>
     <img src="/images/PokeFondo.png" className="home__img"/>
     <h1>¡Hi trainer!</h1>
     <p>To start, give me your name.</p>
     <form className="btn__second" onSubmit={handleSubmit}>
      <input className="btn__input" id='inputTrainer' ref={inputTrainer} type="text"/>
      <button className="btn__one">Let`s catch them all!</button>
     </form>
    </div>
    <footer className="black-foote">
       <div className="red-foote" >
       </div>
    </footer>
     

    </>
  )
}

export default HomePage