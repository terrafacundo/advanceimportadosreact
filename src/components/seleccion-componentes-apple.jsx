import React from "react";
import { useState } from "react";


const SeleccionComponentes = ({componentes,id,configuracionComponentes})=>{


    
    return(
        componentes.map(elemento=>(
        <div className="boton-seleccion" onClick={()=>configuracionComponentes(`${elemento}`)}>{elemento}</div>
        )
            )    )

}

export default SeleccionComponentes