import React from "react";
import productos from "./productos";


const SeleccionRam = ({ram,id})=>{
    
    return(
        ram.map(elemento=>(
        <div className="boton-seleccion">{elemento}</div>
        )
            )    )

}

export default SeleccionRam