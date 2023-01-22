import React from "react";
import { Link } from "react-router-dom";

const RedireccionadorApple =({nombrebanner,link})=>{
    return(
        <Link to={`/filt/${link.toLowerCase()}`}> 
        <div className="tarjeta_galeria_productos_apple">
            <img src={nombrebanner} className="foto-redirecc-apple"></img>
        </div>
        </Link> 
    )
}

export default RedireccionadorApple