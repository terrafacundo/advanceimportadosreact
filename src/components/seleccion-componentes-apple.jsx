import React from "react";
import SeleccionComponenteDetalle from "./seleccion-componentes-apple-detalle";


const SeleccionComponentes = ({componentes, configuracionComponentes,configcomponente})=>{
    
    return(
        componentes.map(elemento=>(
        // <div className="boton-seleccion" onClick={()=>configuracionRam(`${elemento}`)}>{elemento}</div>
        <SeleccionComponenteDetalle key={elemento} configuracionComponentes={configuracionComponentes} configcomponente={configcomponente} elemento={elemento}/> 
        )
            )    )

}

export default SeleccionComponentes