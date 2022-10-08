import React from "react";
import SeleccionTamanoDetalle from "./seleccion-tamano-apple-detalle";


const SeleccionTamano = ({memoria,configmemo,configuracionMemo})=>{
    
    return(
        memoria.map(elemento=>(
        // <div className="boton-seleccion" onClick={()=>configuracionRam(`${elemento}`)}>{elemento}</div>
        <SeleccionTamanoDetalle key={elemento} configuracionMemo={configuracionMemo} configmemo={configmemo} elemento={elemento}> </SeleccionTamanoDetalle>
        )
            )    )

}

export default SeleccionTamano