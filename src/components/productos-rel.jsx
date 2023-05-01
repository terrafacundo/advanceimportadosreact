import ProductoDetalle from "./productodetalle";
import productos from "./productos";

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



const ListadoProductosProRel =({especifico})=>{


    
    if(especifico==='tendencia'){
        const nuevo_Array = productos?.filter(x=>x.tendencia===true)
        return(
            <>
            <Swiper 
            Swiper navigation={true} modules={[Navigation]} className="mySwiper"
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
                  spaceBetween:50,
                },
              }}>

            {nuevo_Array?.map((x) =>(
                <SwiperSlide key={x.id}>
                  <ProductoDetalle key={x.id} id={x.id} nombre={x.nombre} foto={x.foto} precio={x.precio}/>
                </SwiperSlide>
                ))}
            
            </Swiper>
            </>
)
}

    if (especifico==='oferta'){
        const nuevo_Array = productos?.filter(x=>x.oferta===true)
        return(
            <>
            <Swiper 
            Swiper navigation={true} modules={[Navigation]} className="mySwiper" centeredSlides={true}
            breakpoints={{
                576: {
                  slidesPerView:3,
                  spaceBetween:20,
                },
                768: {
                  slidesPerView:2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView:3,
                  spaceBetween:50,
                },
              }}>

            {nuevo_Array?.map((x) =>(
                <SwiperSlide key={x.id}>
                <ProductoDetalle
                key={x.id}
                id={x.id}
                nombre={x.nombre}
                foto={x.foto}
                oferta={x.oferta}
                precio={x.precio}
                precioAnterior={x.precioAnterior}
                />
                </SwiperSlide>
                ))}
            
            </Swiper>
            </>
)
}
}

export default ListadoProductosProRel
