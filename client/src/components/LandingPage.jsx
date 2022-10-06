import React from "react";
import { Link } from "react-router-dom";

import s from "../styles/LandingPage.module.css"

export default function Landing(){
    return(
        <div>
            <div className={s.titulo}>
                <h1>Bienvenidos!</h1>
            </div>
            <div className={s.btn}>
                <Link to="/home">
                    <button>Entrar</button>
                </Link>
            </div>
        </div>
    )
}