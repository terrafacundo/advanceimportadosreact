import React from "react"
import NavBar from "../navbar"
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <div className="nav">
            <Link to="/">
                <img src="https://placekitten.com/60/60" alt=""></img>
            </Link>
            <NavBar a="Productos" b="Apple" c="Gaming" d="Cotizar" e="Nosotros"/>

        </div>
    )
}

export default Header