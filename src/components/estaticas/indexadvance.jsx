import React from "react";
import CarouselFade from '../carousel';
import ListadoProductosContainer from '../productoListContainer';


const Indexadvance =()=>{
    return(
        <>
            <CarouselFade/>
            <div className="sector_tendencias">
                <h2 className='titulo_productos_en_tendencia'>Productos en tendencia</h2>
                <ListadoProductosContainer tendencia={true}/>
            </div>
        </>
    )
}


export default Indexadvance