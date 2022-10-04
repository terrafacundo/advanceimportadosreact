import React from "react";
import { Link } from "react-router-dom";


const RedireccionadorGaming =({link,nombrebanner})=>{
    return(
        <div className="tarjeta_galeria_productos_apple">
            <img src={nombrebanner}  className="foto-redirecc-apple" alt ={`Redireccionamiento a ${nombrebanner}`}/>
            <div className="contenedor_organizador">
                    <Link to={`/filt/${link.toLowerCase()}`} className="apple_botones_ver_mas">Ver más</Link>
            </div>  
        </div>
    )
}

export default RedireccionadorGaming