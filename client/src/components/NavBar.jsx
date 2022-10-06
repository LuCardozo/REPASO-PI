import React from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { getCharacter } from "../redux/actions";

import s from "../styles/NavBar.module.css"

export default function NavBar(){
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(getCharacter())
    }

    return(
        <div>
            <div className={s.container}>
                <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png" className={s.logo} />
            </div>
            <div className={s.nav}>
                <div>
                    <Link to="/">
                        <button> Landing </button>
                    </Link>
                </div>
                <div>
                    <input type="text" placeholder="Character"/>
                    <button type="submit">Buscar</button>
                </div>
                <button onClick={handleClick} >Recargar personajes</button>
            </div>
                <div className={s.creator}>
                    <Link to="/create">
                        <button>Crea tu propio personaje!</button>
                    </Link>
                </div>
        </div>
    )
}