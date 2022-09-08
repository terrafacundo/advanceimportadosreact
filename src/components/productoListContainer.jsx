import React from "react";
import ListadoProductos from "./ListadoProductos";
import productos from "./productos";


const ListadoProductosContainer = () =>{
    return(
        <div className="contenedor_productos_tendencia">
            <ListadoProductos products={productos} ></ListadoProductos>
        </div>
    )
}

export default ListadoProductosContainer