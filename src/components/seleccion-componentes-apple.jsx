import React from "react";
import productos from "./productos";


const SeleccionComponentes = ({componentes,id})=>{
    
    return(
        componentes.map(elemento=>(
        <div className="boton-seleccion">{elemento}</div>
        )
            )    )

}

export default SeleccionComponentes