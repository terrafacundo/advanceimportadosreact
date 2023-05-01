import React from "react";
import CarouselFade from '../carousel';
import ListadoProductosProRel from "../productos-rel";
import horarios from "./media/horarios.svg"
import contacto from "./media/arroba.svg"
import whatsapp from "./media/whatsapp.svg"
import CarouselResenas from "./CarouselResenas";

import banner1 from "./media/banners/banner-1.jpg"
import banner2 from "./media/banners/banner-2.jpg"
import banner3 from "./media/banners/banner-3.jpg"
import banner4 from "./media/banners/banner-4.jpg"
import banner5 from "./media/banners/banner-5.jpg"
import banner6 from "./media/banners/banner-6.jpg"
import banner7 from "./media/banners/banner-7.jpg"
import banner8 from "./media/banners/banner-8.jpg"

const Indexadvance =()=>{
    return(
        <div className="index-view">
            <CarouselFade banner1={banner1} banner2={banner2} banner3={banner3} banner4={banner4} banner5={banner5} banner6={banner6} banner7={banner7} banner8={banner8}/>
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
                    <div className="sub-contendor-tendencia" id="tendencias">
                            <ListadoProductosProRel especifico={'tendencia'}/>
                    </div>
                </div>


                <div className="sector_index">
                    <h2 className='titulo_productos_en_index'>Productos en Oferta</h2>
                    <div className="sub-contendor-tendencia" id="ofertas">
                        <ListadoProductosProRel especifico={'oferta'}/>
                    </div>
                </div>


                <div className="sector_index" id="reseñas">
                        <h2 className='titulo-reseñas'>Reseñas de nuestros clientes</h2>
                    <div className="sub-contendor-tendencia">    
                        <CarouselResenas/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Indexadvance