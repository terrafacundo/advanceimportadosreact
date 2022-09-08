import React from "react";
import ProductoDetalle from "./productodetalle";
import productos from "./productos";
import { Link } from "react-router-dom";



const ListadoProductosPro =({categoria})=>{
    const nuevo_Array = productos.filter(x=>x.categoria===categoria)
    if (nuevo_Array.length !==0){
    return(
        nuevo_Array.map((x) =>(
            <ProductoDetalle
            key={x.id}
            id={x.id}
            nombre={x.nombre}
            foto={x.foto}
            precio={x.precio}
            />)
    )
    )}
    else{
        return(
            <div>
            <h1 className="texto_no_encontrado">No encontramos ningun producto en el sector '{categoria}'.</h1>
            <h6>Si no encontrás lo que buscas, también podes <Link to='/Cotizar'>cotizar</Link> eso que buscás.</h6>
            </div>
        )
    }
}
        
export default ListadoProductosPro;