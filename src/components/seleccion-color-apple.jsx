import React from "react";
import productos from "./productos";


const SeleccionColor = ({color,id})=>{
    
    return(
        color.map(elemento=>(
        <div className={`boton-${elemento}`}></div>
        )
            )    )

}

export default SeleccionColor