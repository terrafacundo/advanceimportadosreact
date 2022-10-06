import React from "react";
import { useState } from "react";


const SeleccionColor = ({color,id,configuracionColor})=>{
    
    const [configcolor, setconfiguracioncolor] = useState("");

    // configuracionColor=(x)=>{
    //     setconfiguracioncolor(x)
    //     //modificar aca tambien el classname para hacerlo activo apenas se seleccione y cambie de color asi el cliente lo nota
    //     console.log('desde el hijo',configcolor)}

    return(
        color.map(elemento=>(
        <div className={`boton-${elemento}`} onClick={()=>configuracionColor(`${elemento}`)}></div>
        )
            )    )

}

export default SeleccionColor