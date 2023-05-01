import React from "react";
import ProductoDetalle from "./productodetalle";
import { Link } from "react-router-dom";
import productos from "./productos";

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// import { db } from "../firebase";
// import { collection , getDocs } from "firebase/firestore";
// import { useState } from "react";



const ListadoProductosProCarousel =({categoria})=>{

    // const collecionProductos = collection(db,"productos")
    // const consulta = getDocs(collecionProductos)
    // const [productos,setProductos] = useState();
    //pidiendo informacion al servidor

    // consulta
    // .then(res=>{
    //     const productos_mapeados = res.docs.map((ref)=>{
    //         const aux = ref.data();
    //         aux.id = ref.id;
    //         return aux
    //         })

            // setProductos(productos_mapeados)
        // })

    // .catch((error)=>{
    //     console.log('Los datos no han podido ser cargados')
    // })

    // .catch((error)=>{console.log('El servicio se encuentra en reparacion')})

        const nuevo_Array = productos?.filter(x=>x.categoria[0]===categoria)
        const nuevo_Array_seg_pos = productos?.filter(x=>x.categoria[1]==='all')

        // console.log('nuevo_array', nuevo_Array)
        // console.log('nuevo array seg pos ',nuevo_Array_seg_pos)

        if (nuevo_Array?.length !==0 && nuevo_Array_seg_pos?.length !==0 ){
        return(

            <Swiper Swiper navigation={true} modules={[Navigation]} className="mySwiper"
            breakpoints={{
                576: {
                  slidesPerView:2,
                  spaceBetween:10,
                },
                768: {
                  slidesPerView:2,
                  spaceBetween:40,
                },
                1024: {
                  slidesPerView:4,
                  spaceBetween:10,
                },
              }}>

                {nuevo_Array?.map((x) =>(
                <SwiperSlide>
                    <ProductoDetalle
                    key={x.id}
                    id={x.id}
                    nombre={x.nombre}
                    foto={x.foto}
                    precio={x.precio}
                    />
                </SwiperSlide>))}
            </Swiper>   
                )
            }
                

        if(nuevo_Array?.length === 0 && nuevo_Array_seg_pos?.length !==0){
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
            return(
                <div className="busqueda-no-encontrada">
                <h1 className="texto-no-encontrado">No encontramos ningun producto en el sector '{categoria}'.</h1>
                <h6 className="texto-no-encontrado-inf">Si no encontrás lo que buscas, también podes <Link to='/Cotizar' className="cotizar">cotizar</Link> eso que buscás.</h6>
                </div>
            )
        }
    }
        
export default ListadoProductosProCarousel;