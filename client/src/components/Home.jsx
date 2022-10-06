// ********** IMPORTO LAS LIBRERIAS NECESARIAS
import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
//************* IMPORTO COMPONENTES
import Card from "./Card";
import NavBar from "./NavBar";
//***** IMPORTO ACTIONS
import { getCharacter } from "../redux/actions";

//**********importo estilos
import s from "../styles/Home.module.css"


export default function Home(){

const dispatch = useDispatch();
const allCharacters = useSelector((state) => state.characters)

useEffect(() =>{
    dispatch(getCharacter())
},[dispatch])

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={s.cards}>
                {
                    console.log(allCharacters)
                }
                {
                    allCharacters && allCharacters.map((c) =>{
                        return(
                            <div key ={c.id} >
                                <Card name={c.name} id={c.id} image={c.image} />
                            </div>
                        )    
                
                    })
                }

            </div>
        </div>
    )
}