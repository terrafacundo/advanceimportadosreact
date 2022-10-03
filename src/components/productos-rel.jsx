import React from "react";
import ProductoDetalle from "./productodetalle";
import productos from "./productos";



const ListadoProductosProRel =()=>{
    const nuevo_Array = productos.filter(x=>x.tendencia===true)
    return(
        nuevo_Array.map((x) =>(
            <ProductoDetalle
            key={x.id}
            id={x.id}
            nombre={x.nombre}
            foto={x.foto}
            precio={x.precio}
            />)
    ))}

export default ListadoProductosProRel
