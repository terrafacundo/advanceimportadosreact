import React from "react";
import productos from "./productos";
import { useState} from "react";

const SeleccionTamano = ({memoria,id,configuracionMemo})=>{


    return(
        memoria.map(elemento=>(
        <div className="boton-seleccion" onClick={()=>configuracionMemo(`${elemento}`)}>{elemento}</div>
        )
            )    )

}

export default SeleccionTamano