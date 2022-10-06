import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEpisode, postCharacter } from "../redux/actions";

import s from "../styles/createCharacter.module.css"



export default function CreateCharacter(){

const dispatch = useDispatch();
let episodes = useSelector((state) => state.episodes);

const [input, setInput] = useState({
    name: "",
    origin: "",
    species: "",
    image: "",
    episodes: []
})

useEffect(() =>{
    dispatch(getEpisode())
},[dispatch])


const handleChange = (e) =>{
    console.log(input)
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}
const handleReset = (e) =>{
    setInput({
        name: "",
        origin: "",
        species: "",
        image: "",
        episodes: []
    })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(postCharacter(input))
    setInput({
        name: "",
        origin: "",
        species: "",
        image: "",
        episodes: []
    })
}

console.log(episodes)

    return(
        <div>
            <div>
                <Link to="/home">
                <button>Home</button>
                </Link>
            </div>
            <div>
                <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png" alt="image not found" className={s.logo} />
            </div>
            <div className={s.container}>
                <form onSubmit={handleSubmit}>
                    <label>Nombre: </label>
                    <input type="text"  value={input.name} name="name" onChange={handleChange} />

                    <label>Origen: </label>
                    <input type="text" value={input.origin} name="origin" onChange={handleChange} />

                    <label>Especie: </label>
                    <input type="text" value={input.species} name="species" onChange={handleChange} />

                    <label>Imagen: </label>
                    <input type="text" value={input.image} name="image" onChange={handleChange} />

                    <label>Episodios: </label>
                    <input type="text" />


                    <div className={s.btn}>
                        <button type="submit">Crear!</button>
                        <button type="reset" onClick={handleReset} >Vaciar</button>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}