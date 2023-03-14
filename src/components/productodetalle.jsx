import React from "react";
import {Link} from 'react-router-dom'



const ProductoDetalle=({id,nombre,foto,nombreCorto,precio,precioAnterior,descripcion,estado,tendencia,marca,categoria,ubicacion,oferta})=>{
    if(oferta===false || oferta===undefined && nombre.length>=35){
        return(
            <div>
                <Link to={`/Productos/${id}`} className="tarjeta_producto" key={id}>
                    <div className="contenedor-foto-producto-detalle">
                        <img className="foto_producto" src={foto[0]}/>
                    </div>
                    <div className="division-info">
                        <a className="nombre_producto">{nombreCorto}</a>
                        <h6 className="desc_producto">{descripcion}</h6>
                        <h5 className="precio_producto">USD {precio}</h5>
                        </div>
                </Link>
            </div>
        )
    }

    if(oferta===false || oferta===undefined && nombre.length<34){
        return(
            <div>
                <Link to={`/Productos/${id}`} className="tarjeta_producto" key={id}>
                    <div className="contenedor-foto-producto-detalle">
                        <img className="foto_producto" src={foto[0]}/>
                    </div>
                    <div className="division-info">
                        <a className="nombre_producto">{nombre}</a>
                        <h6 className="desc_producto">{descripcion}</h6>
                        <h5 className="precio_producto">USD {precio}</h5>
                        </div>
                </Link>
            </div>
        )
    }

    if (oferta===true){
    return(
        <div>
            <Link to={`/Productos/${id}`} className="tarjeta_producto" key={id}>
                <div className="contenedor-foto-producto-detalle">
                    <img className="foto_producto" src={foto[0]}/>
                </div>
                <div className="division-info">
                    <a className="nombre_producto">{nombre}</a>
                    <h6 className="desc_producto">{descripcion}</h6>
                    <div className="precios-oferta-org">
                        <del className="precio-producto-anterior">USD {precioAnterior}</del>
                        <h5 className="precio_producto-actual">USD {precio}</h5>
                        
                    </div>
                </div>
            </Link>
        </div>
    )
    }

}
export default ProductoDetalle;