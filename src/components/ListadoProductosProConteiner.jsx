import React from "react";

import ListadoProductosPro from "./listadoproductos_maspro";
import ListadoProductosProCarousel from "./pr-rel-carousel";



const ListadoProductosProContainer = (param) =>{
    if(param.pagina==='pr-rel'){
        return(
            <div className="contenedor_resultados-pr-rel" id="relacionados">
                <ListadoProductosProCarousel categoria={param.categoria[0]}></ListadoProductosProCarousel>
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