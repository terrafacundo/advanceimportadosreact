import React from "react";
import CarouselFade from '../carousel';
import ListadoProductosProRel from "../productos-rel";


const Indexadvance =()=>{
    return(
        <div className="index-view">
            <CarouselFade/>
            <div className="sector_tendencias">
                <h2 className='titulo_productos_en_tendencia'>Productos en tendencia</h2>
                <div className="sub-contendor-tendencia">
                    <ListadoProductosProRel/>
                </div>
                </div>
        </div>
    )
}


export default Indexadvance