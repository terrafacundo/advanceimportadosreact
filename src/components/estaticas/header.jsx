import React from "react"
import NavBar from "../navbar"
import {Link} from 'react-router-dom';
import ToggleStyle from "./togglestyle";
import icon from "./media/icon.png" ;
import icon2 from "./media/icon2.png" 

const Header =()=>{
    return(
        <div className="organizador-nav">
            <div className="nav">
                <div className="org-nav-int">
                    <Link to="/">
                        <img src={icon2} alt="" className="reajuste-icon"></img>
                    </Link>
                    
                    <div className="toggle-button" onClick={ToggleStyle}>
                        <span className="barra"></span>
                        <span className="barra"></span>
                        <span className="barra"></span>
                    </div>
                </div>
                <h1 className="titulo-header">ADVANCE IMPORTADOS</h1>
                <NavBar className="navbar-listado-horiz" a="Productos" b="Apple" c="Gaming" d="Cotizar" e="Nosotros"/>
            </div>
            
        </div>
    )
}

export default Header