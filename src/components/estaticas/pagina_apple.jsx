import React from "react";
import RedireccionadorApple from "./redirecc_apple";


const PaginaApple =()=>{
    return(
        <div className="galeria_productos_apple">
            <RedireccionadorApple link='Iphone'/>
            <RedireccionadorApple link='Ipad'/>
            <RedireccionadorApple link='Macbook'/>
            <RedireccionadorApple link='Watch'/>
            <RedireccionadorApple link='Accesorios'/>
            <RedireccionadorApple link='MacStudio-MacMini'/>
            <RedireccionadorApple link='IMac'/>
        </div>
    )
}

export default PaginaApple