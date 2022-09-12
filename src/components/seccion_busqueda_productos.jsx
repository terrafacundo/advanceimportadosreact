import React from "react";
import ListadoProductosProConteiner from "./ListadoProductosProConteiner";
import FiltroBusquedas from "./secccion_busqueda_productos_barra_filtrados";
import { useParams } from "react-router-dom";


const SeccionBusquedaProductos = () => {
    const {tipo} = useParams()
        return(
        <div className="contenedor_productos">
            <FiltroBusquedas/>
            <ListadoProductosProConteiner pagina="contenedor-resultados" categoria={tipo}/>
        </div>


    )

    }

export default SeccionBusquedaProductos