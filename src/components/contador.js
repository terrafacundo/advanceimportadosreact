import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Contador = (props) =>{

    //logica
        const[carrito,setContador] = useState(0);

        const sumarCarrito=()=>{
            setContador(props.stock>carrito?carrito+1:carrito)
        }
        const restarCarrito=()=>{
            setContador(carrito>0?carrito-1:carrito)
        }
        const restaurarCarrito=()=>{
            setContador(0)
        }

        useEffect(() => {
        console.log('hola')
        })
    return(
    <div>
        <h2>Cantidad restante de productos:{props.stock-carrito}</h2>
        <h2>Su carrito tiene {carrito} productos.</h2>
        <button onClick={sumarCarrito}>Sumar</button>
        <button onClick={restarCarrito}>Sacar</button>
        <button onClick={restaurarCarrito}>Reiniciar</button>

    </div>

    )
}

export default Contador;