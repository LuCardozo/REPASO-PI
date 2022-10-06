import React from "react"
import { Link } from "react-router-dom"

import s from "../styles/Card.module.css"

export default function Card({name, id, image}){
    return(
        <Link to={`/home/${id}`}>
            <div className={s.card}>
                <img src={image} />
                <h1>{name}</h1>
            </div>
        </Link>
    )
}