import React from "react";
import { Link } from "react-router-dom";


const RedireccionadorGaming =({link,nombrebanner})=>{
    return(
        <Link to={`/filt/${link.toLowerCase()}`}> 
        <div className="tarjeta_galeria_productos_apple">
            <img src={nombrebanner}  className="foto-redirecc-apple" alt ={`Redireccionamiento a ${nombrebanner}`}/>
        </div>
        </Link>
    )
}

export default RedireccionadorGaming