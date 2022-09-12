import { useParams } from "react-router-dom"
import ListadoProductos from "./ListadoProductos"
import ListadoProductosProContainer from "./ListadoProductosProConteiner"



const ProductoDetalleExtendido =({id,nombre,foto,precio,descripcion,estado,tendencia,marca,categoria})=>{

    if (marca==='apple'){
        return(
            <h2>producto apple</h2>
        )
    }

    else{
    return(
        <div className="contenedor_pagina_producto" key={id}>
            <img className="foto_producto_ext" src={foto}></img>
            <h3 className="nombre_producto_ext">{nombre}</h3>
            <h5 className="precio_producto_ext">ARS {precio}</h5>
            <div className="sector-descripcion">
                <h6 className="descripcion_producto_ext">Descripción:{descripcion}</h6>
            </div>

            <div className="sector-productos-relacionados">
                <h3 className="sector-productos-relacionados-titulo">Productos Relacionados</h3>
                <ListadoProductosProContainer pagina="pr-rel" categoria={categoria}></ListadoProductosProContainer>
            </div>
        </div>

    )
    }

}

export default ProductoDetalleExtendido