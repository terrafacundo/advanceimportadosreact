import React from "react";
import {Link} from 'react-router-dom'



const ProductoDetalle=({id,nombre,foto,precio,precioAnterior,descripcion,estado,tendencia,marca,categoria,ubicacion,oferta})=>{
    if(oferta===false || oferta===undefined){
        return(
            <Link to={`/Productos/${id}`} className="tarjeta_producto" key={id}>
                <div className="contenedor-foto-producto-detalle">
                    <img className="foto_producto" src={foto[0]}/>
                </div>
                <div className="division-info">
                    <h3 className="nombre_producto">{nombre}</h3>
                    <h6 className="desc_producto">{descripcion}</h6>
                    <h5 className="precio_producto">USD {precio}</h5>
                    </div>
                </Link>
        )
    }

    if (oferta===true){
    return(
        <Link to={`/Productos/${id}`} className="tarjeta_producto" key={id}>
            <div className="contenedor-foto-producto-detalle">
                <img className="foto_producto" src={foto[0]}/>
            </div>
            <div className="division-info">
                <h3 className="nombre_producto">{nombre}</h3>
                <h6 className="desc_producto">{descripcion}</h6>
                <div className="precios-oferta-org">
                    <del className="precio-producto-anterior">USD {precioAnterior}</del>
                    <h5 className="precio_producto-actual">USD {precio}</h5>
                    
                </div>
            </div>
        </Link>
    )
    }

}
export default ProductoDetalle;