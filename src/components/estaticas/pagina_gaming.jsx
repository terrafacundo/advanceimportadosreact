import React from "react";
import RedireccionadorGaming from "./redirecc_gaming";
import notebook from './media/notebook.jpg'
import monitores from './media/monitores.jpg'

const PaginaGaming =()=>{
    return(
        <div className="galeria_productos_apple">
            <RedireccionadorGaming link='notebook'/>
            <RedireccionadorGaming link='mineria'/>
            <RedireccionadorGaming link='monitores'/>
            <RedireccionadorGaming link='vr'/>
        </div>
    )
}

export default PaginaGaming