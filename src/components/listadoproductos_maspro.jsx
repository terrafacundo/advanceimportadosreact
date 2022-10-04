import React from "react";
import ProductoDetalle from "./productodetalle";
import productos from "./productos";
import { Link } from "react-router-dom";



const ListadoProductosPro =({categoria})=>{
    console.log(categoria)

        const nuevo_Array = productos.filter(x=>x.categoria[0]===categoria)
        const nuevo_Array_seg_pos = productos.filter(x=>x.categoria[1]==='all')

        // console.log('nuevo_array', nuevo_Array)
        // console.log('nuevo array seg pos ',nuevo_Array_seg_pos)

        if (nuevo_Array.length !==0 && nuevo_Array_seg_pos.length !==0 ){
            console.log('cumple la primera')
        return(
            nuevo_Array.map((x) =>(
                <ProductoDetalle
                key={x.id}
                id={x.id}
                nombre={x.nombre}
                foto={x.foto}
                precio={x.precio}
                />)
        ))}

        if(nuevo_Array.length === 0 && nuevo_Array_seg_pos.length !==0){
            console.log('cumple la segunda')
            return(
                nuevo_Array_seg_pos.map((x) =>(
                    <ProductoDetalle
                    key={x.id}
                    id={x.id}
                    nombre={x.nombre}
                    foto={x.foto}
                    precio={x.precio}
                    />)
            ))
        }

        if(nuevo_Array.length === 0 && nuevo_Array_seg_pos.length ===0){
            console.log('cumple la tercera')
            return(
                <div className="busqueda-no-encontrada">
                <h1 className="texto-no-encontrado">No encontramos ningun producto en el sector '{categoria}'.</h1>
                <h6 className="texto-no-encontrado-inf">Si no encontrás lo que buscas, también podes <Link to='/Cotizar' className="cotizar">cotizar</Link> eso que buscás.</h6>
                </div>
            )
        }
    }
        
export default ListadoProductosPro;