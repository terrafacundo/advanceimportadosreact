import React from "react";
import SeleccionRamDetalle from "./seleccion-ram-apple-detalle";


const SeleccionRam = ({ram,id,configuracionRam,configram})=>{
    
    return(
        ram.map(elemento=>(
        // <div className="boton-seleccion" onClick={()=>configuracionRam(`${elemento}`)}>{elemento}</div>
        <SeleccionRamDetalle key={elemento} configuracionRam={configuracionRam} configram={configram} elemento={elemento}> </SeleccionRamDetalle>
        )
            )    )

}

export default SeleccionRam