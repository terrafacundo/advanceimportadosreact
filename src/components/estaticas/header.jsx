import React from "react"
import NavBar from "../navbar"
import {Link} from 'react-router-dom';
import ToggleStyle from "./togglestyle";

const Header =()=>{
    return(
        <div className="nav">
            <div>
                <Link to="/">
                    <img src="https://placekitten.com/60/60" alt=""></img>
                </Link>
                <div className="toggle-button" onClick={ToggleStyle}>
                    <span className="barra"></span>
                    <span className="barra"></span>
                    <span className="barra"></span>
                </div>
            </div>
            <NavBar className="navbar-listado-horiz" a="Productos" b="Apple" c="Gaming" d="Cotizar" e="Nosotros"/>
        </div>
    )
}

export default Header