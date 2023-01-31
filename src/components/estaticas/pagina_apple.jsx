import React from "react";
import RedireccionadorApple from "./redirecc_apple";

import watch from './media/watch.jpg'
import accesorios from './media/accesorios.jpg'
import iphone from './media/iphone.jpg'
import ipad from  './media/ipad.jpg'
import macbook from './media/macbook.jpg'
import mac from './media/mac.jpg'
import imac from  './media/imac.jpg'
import CarouselFade from "../carousel";

import bannerap1 from  './media/banner-ap-1.jpeg'



const PaginaApple =()=>{
    return(
        <div className="pre-banner">
            {/* <h2 className="banner-cotizar">Apple</h2> */}

            <CarouselFade banner1={bannerap1} />

            <div className="galeria_productos_apple">
                <RedireccionadorApple link='Iphone' nombrebanner={iphone}/>
                <RedireccionadorApple link='Ipad' nombrebanner={ipad}/>
                <RedireccionadorApple link='Macbook' nombrebanner={macbook}/>
                <RedireccionadorApple link='Watch' nombrebanner={watch}/>
                <RedireccionadorApple link='Accesorios' nombrebanner={accesorios}/>
                <RedireccionadorApple link='MacStudio-MacMini' nombrebanner={mac}/>
                <RedireccionadorApple link='IMac' nombrebanner={imac}/>
            </div>
        </div>
    )
}

export default PaginaApple