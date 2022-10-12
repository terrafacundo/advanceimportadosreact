import React from "react";
import ListadoProductos from "./ListadoProductos";

import { db } from "../firebase";
import { getDocs , collection } from "firebase/firestore";


const ListadoProductosContainer = () =>{
    const collecionProductos = collection(db,"productos")
    const consulta = getDocs(collecionProductos)
    const [productos,setProductos] = useState();
    //pidiendo informacion al servidor

    consulta
    .then(res=>{
        const productos_mapeados = res.docs.map(ref=>{
            const aux = ref.data();
            aux.id = ref.id;
            return aux
            })
        
        .then((r)=>{
            setProductos(r)
        })
    })

    .catch((error)=>{
        console.log('no se pudo cargar el contenido')
    })

    return(
        <div className="contenedor_productos_busqueda">
            <ListadoProductos products={productos} ></ListadoProductos>
        </div>
    )
}

export default ListadoProductosContainer