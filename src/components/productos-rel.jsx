import React from "react";
import ProductoDetalle from "./productodetalle";
import productos from "./productos";

import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";


const ListadoProductosProRel =()=>{

    const collecionProductos = collection(db,"productos")
    const consulta = getDocs(collecionProductos)
    const [productos,setProductos] = useState();
    //pidiendo informacion al servidor

    consulta
    .then(res=>{
        const productos_mapeados = res.docs.map((ref)=>{
            const aux = ref.data();
            aux.id = ref.id;
            return aux
            })

            setProductos(productos_mapeados)
        })

    .catch((error)=>{
        console.log('Los datos no han podido ser cargados')
    })

    const nuevo_Array = productos?.filter(x=>x.tendencia===true)
    return(
        nuevo_Array?.map((x) =>(
            <ProductoDetalle
            key={x.id}
            id={x.id}
            nombre={x.nombre}
            foto={x.foto}
            precio={x.precio}
            />)
    ))}

export default ListadoProductosProRel
