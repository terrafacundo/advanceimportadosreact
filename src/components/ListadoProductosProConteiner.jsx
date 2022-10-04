import React from "react";

import ListadoProductosPro from "./listadoproductos_maspro";



const ListadoProductosProContainer = (param) =>{
    if(param.pagina==='pr-rel'){
        return(
            <div className="contenedor_resultados-pr-rel">
                <ListadoProductosPro categoria={param.categoria[0]}></ListadoProductosPro>
            </div>
        )      
    }
    else if(param.pagina==='contenedor-resultados'){
    return(
        <div className="contenedor_resultados">
            <ListadoProductosPro categoria={param.categoria}></ListadoProductosPro>
        </div>
    )}
}

export default ListadoProductosProContainer