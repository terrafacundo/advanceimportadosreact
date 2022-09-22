import React from "react";
import productos from "./productos";


const SeleccionTamano = ({memoria,id})=>{
    
    return(
        memoria.map(elemento=>(
        <div className="boton-seleccion">{elemento}</div>
        )
            )    )

}

export default SeleccionTamano