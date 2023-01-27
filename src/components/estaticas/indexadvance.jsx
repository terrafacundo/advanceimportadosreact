import React from "react";
import CarouselFade from '../carousel';
import ListadoProductosProRel from "../productos-rel";
import horarios from "./media/horarios.svg"
import contacto from "./media/arroba.svg"
import whatsapp from "./media/whatsapp.svg"
import CarouselResenas from "./CarouselResenas";

const Indexadvance =()=>{
    return(
        <div className="index-view">
            <CarouselFade/>
            <div className="info-general-index">
                <div className="info-general-tarjetas">
                    <img src={horarios}></img>
                    <h3>Horarios de Atención</h3>
                    <h5>Lunes a Viernes de 10:00hs a 18:00hs</h5>
                </div>
                <div className="info-general-tarjetas">
                    <img src={contacto}></img>
                    <h3>Contacto vía E-mail</h3>
                    <h5>advanceimportados@gmail.com</h5>
                </div>
                <div className="info-general-tarjetas">
                    <img src={whatsapp}></img>
                    <h3>Contacto vía Whatsapp</h3>
                    <h5>+54 9 11 2330-1261</h5>
                </div>

            </div>

            <div className="main-secciones">
                <div className="sector_index">
                    <h2 className='titulo_productos_en_index'>Productos en tendencia</h2>
                    <div className="sub-contendor-tendencia">
                            <ListadoProductosProRel especifico={'tendencia'}/>
                    </div>
                </div>


                <div className="sector_index">
                    <h2 className='titulo_productos_en_index'>Productos en Oferta</h2>
                    <div className="sub-contendor-tendencia">
                        <ListadoProductosProRel especifico={'oferta'}/>
                    </div>
                </div>


                <div className="sector_index">
                        <h2 className='titulo-reseñas'>Reseñas de nuestros clientes</h2>
                    <div className="sub-contenedor-tendencia">    
                        <CarouselResenas/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Indexadvance