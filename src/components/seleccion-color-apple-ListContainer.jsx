import React from "react";
import SeleccionColorDetalle from "./SeleccionColorDetalle";


const SeleccionColor = ({color,id,configuracionColor,colorInicial})=>{

    return(
        color.map(elemento=>(
        // <div key={elemento.toString(id)} className={`boton-${elemento} ${claseColorActive}`} onClick={()=>{configuracionColor(`${elemento}`); {modificadorClaseColor(elemento)}}}></div>
        <SeleccionColorDetalle key={elemento} coloreado={elemento} configuracionColor={configuracionColor} elemento={elemento} colorInicial={colorInicial}></SeleccionColorDetalle>
        )
            )    )

}

export default SeleccionColor