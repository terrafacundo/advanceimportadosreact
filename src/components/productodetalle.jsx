import React from "react";
import {Link} from 'react-router-dom'



const ProductoDetalle=({id,nombre,foto,precio,descripcion,estado,tendencia,marca,categoria,ubicacion})=>{
    return(
        <div className="tarjeta_producto" key={id}>
            <div className="contenedor-foto-producto-detalle">
                <img className="foto_producto" src={foto[0]}></img>
            </div>
            <div className="division-info">
                <h3 className="nombre_producto">{nombre}</h3>
                <h6 className="desc_producto">{descripcion}</h6>
                <h5 className="precio_producto">USD {precio}</h5>
                <div className="boton_masinfo">
                    <Link to={`/Productos/${id}`} className="boton_masinfo_a">Mas info.</Link>
                </div>
            </div>
            
        </div>
    )

}
export default ProductoDetalle;