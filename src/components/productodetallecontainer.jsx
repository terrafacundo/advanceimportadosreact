import React from "react";
import { TraerProductosporId } from "./estaticas/funcionamiento/customFetch";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import ProductoDetalleExtendido from "./productodetalleextendido";
import productos from "./productos";

import { getDocs , collection} from "firebase/firestore";
import {db} from '../firebase'


const ProductoDetalleExtContainer=()=>{
    const [productosnew,setProductosnew] = useState();

    const {id_link} = useParams();


    useEffect(() => {
        // const collecionProductos = collection(db,"productos")
        // const consulta = getDocs(collecionProductos)

        //pidiendo informacion al servidor

        // consulta
        // .then(res=>{
        //     const productos_mapeados = res.docs.map(ref=>{
        //         const aux = ref.data();
        //         aux.id = ref.id;
        //         return aux
        //         })


        //     TraerProductosporId(productos_mapeados,id_link)
        //     .then((r)=>{
        //         console.log(r)
        //         setProductos(r)
        //     })
        // })
        console.log(productosnew)
        TraerProductosporId(productos,id_link)
        .then((r)=>{
            setProductosnew(r);
        })

        .catch((error)=>
        console.log('no se ha podido cargar la informacion'))
        
    },[]);

    return(
        <div className="pagina_detalle_extendido">
            <ProductoDetalleExtendido {...productosnew}/>
        </div>

    )
};

export default ProductoDetalleExtContainer