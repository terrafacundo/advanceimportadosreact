import React from "react";
import RedireccionadorGaming from "./redirecc_gaming";


const PaginaGaming =()=>{
    return(
        <div className="galeria_productos_apple">
            <RedireccionadorGaming link='Notebook'/>
            <RedireccionadorGaming link='Mineria'/>
            <RedireccionadorGaming link='Monitores'/>
            <RedireccionadorGaming link='VR'/>
        </div>
    )
}

export default PaginaGaming