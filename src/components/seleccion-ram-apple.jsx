import React from "react";
import { useState } from "react";


const SeleccionRam = ({ram,id,configuracionRam})=>{

    
    return(
        ram.map(elemento=>(
        <div className="boton-seleccion" onClick={()=>configuracionRam(`${elemento}`)}>{elemento}</div>
        )
            )    )

}

export default SeleccionRam