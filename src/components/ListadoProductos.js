import React from "react";
import ProductoDetalle from "./productodetalle";



const ListadoProductos =({products})=>{
    return(
        products.map((x) =>(
            <ProductoDetalle
            key={x.id}
            id={x.id}
            nombre={x.nombre}
            foto={x.foto}
            precio={x.precio}
            descripcion={x.descripcion}
            />)
    ));
        }

export default ListadoProductos

