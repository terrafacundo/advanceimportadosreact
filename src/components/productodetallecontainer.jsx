import React from "react";
import { TraerProductosporId } from "./estaticas/funcionamiento/customFetch";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import ProductoDetalleExtendido from "./productodetalleextendido";



const ProductoDetalleExtContainer=()=>{
    const [productos,setProductos] = useState();

    const {id} = useParams();

    useEffect(() => {
        TraerProductosporId(id)
        .then(res =>{setProductos(res)})
        
    },[]);

    return(
        <div className="pagina_detalle_extendido">
            <ProductoDetalleExtendido {...productos}/>
        </div>

    )
};

export default ProductoDetalleExtContainer