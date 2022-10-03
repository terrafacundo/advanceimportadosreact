import React from "react";
import { Link } from "react-router-dom";
import notebook from './media/notebook.jpg'
import monitores from './media/monitores.jpg'

const RedireccionadorGaming =({link})=>{
    return(
        <div className="tarjeta_galeria_productos_apple">
            <img src={notebook}  className="foto-redirecc-apple"/>
            <div className="contenedor_organizador">
                    <Link to={`/filt/${link.toLowerCase()}`} className="apple_botones_ver_mas">Ver más</Link>
            </div>  
        </div>
    )
}

export default RedireccionadorGaming