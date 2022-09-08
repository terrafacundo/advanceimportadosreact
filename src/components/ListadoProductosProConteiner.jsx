import React from "react";

import ListadoProductosPro from "./listadoproductos_maspro";



const ListadoProductosProContainer = ({categoria}) =>{

    return(
        <div className="contenedor_resultados">
            <ListadoProductosPro categoria={categoria}></ListadoProductosPro>
        </div>
    )
}

export default ListadoProductosProContainer