import React from "react";
import RedireccionadorGaming from "./redirecc_gaming";
import notebook from './media/notebook.jpg'
import monitores from './media/monitores.jpg'
import mineria from './media/mineria.jpg'
import vr from  './media/vr.jpg'
import CarouselFade from "../carousel";


const PaginaGaming =()=>{
    return(
        <div className="pre-banner">
            <h2 className="banner-cotizar">Gaming</h2>

            <CarouselFade/>

            <div className="galeria_productos_apple" >
                <RedireccionadorGaming link='notebook' nombrebanner={notebook}/>
                <RedireccionadorGaming link='mineria' nombrebanner={mineria}/>
                <RedireccionadorGaming link='monitores' nombrebanner={monitores}/>
                <RedireccionadorGaming link='vr' nombrebanner={vr}/>
            </div>
        </div>
    )
}

export default PaginaGaming