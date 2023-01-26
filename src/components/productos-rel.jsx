

import ProductoDetalle from "./productodetalle";
import productos from "./productos";
import 'swiper/less'


import { Swiper, SwiperSlide } from 'swiper/react';

const ListadoProductosProRel =({especifico})=>{


    
    if(especifico==='tendencia'){
        const nuevo_Array = productos?.filter(x=>x.tendencia===true)
        return(
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
            {nuevo_Array?.map((x) =>(
                <SwiperSlide>
                  <ProductoDetalle key={x.id} id={x.id} nombre={x.nombre} foto={x.foto} precio={x.precio}/>
                </SwiperSlide>
                ))}
            </Swiper>
)
}

    if (especifico==='oferta'){
        const nuevo_Array = productos?.filter(x=>x.oferta===true)
        return(
            nuevo_Array?.map((x) =>(
                <ProductoDetalle
                key={x.id}
                id={x.id}
                nombre={x.nombre}
                foto={x.foto}
                oferta={x.oferta}
                precio={x.precio}
                precioAnterior={x.precioAnterior}
                />)
        ))
    }
    
    }

export default ListadoProductosProRel
