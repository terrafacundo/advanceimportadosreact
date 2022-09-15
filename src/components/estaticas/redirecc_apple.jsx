import React from "react";
import { Link } from "react-router-dom";

const RedireccionadorApple =({link})=>{
    return(
        <div className="tarjeta_galeria_productos_apple">
            <img src="https://placekitten.com/590/280" className="foto-redirecc-apple"></img>
            <div className="contenedor_organizador">
                    <h2>{link}</h2>
                    <Link to={`/filt/${link.toLowerCase()}`} className="apple_botones_ver_mas">Ver más</Link>
            </div>  
        </div>
    )
}

export default RedireccionadorApple