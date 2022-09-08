import React from "react";
import RedireccionadorGaming from "./redirecc_gaming";


const PaginaGaming =()=>{
    return(
        <div className="galeria_productos_apple">
            <RedireccionadorGaming link='Notebook'/>
            <RedireccionadorGaming link='Tarjetas Graficas'/>
            <RedireccionadorGaming link='Monitores'/>
            <RedireccionadorGaming link='Gafas VR'/>
        </div>
    )
}

export default PaginaGaming