import React from "react";
import RedireccionadorGaming from "./redirecc_gaming";
import notebook from './media/notebook.jpg'
import monitores from './media/monitores.jpg'
import mineria from './media/mineria.jpg'
import vr from  './media/vr.jpg'

const PaginaGaming =()=>{
    return(
        <div className="galeria_productos_apple" >
            <RedireccionadorGaming link='notebook' nombrebanner={notebook}/>
            <RedireccionadorGaming link='mineria' nombrebanner={mineria}/>
            <RedireccionadorGaming link='monitores' nombrebanner={monitores}/>
            <RedireccionadorGaming link='vr' nombrebanner={vr}/>
        </div>
    )
}

export default PaginaGaming