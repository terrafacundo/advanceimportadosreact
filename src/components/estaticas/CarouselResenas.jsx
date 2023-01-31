
import React from 'react';
import reseñas from '../reseñas';
import Resenas from "./resens";

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";



const CarouselResenas = () => {
  return (
    <>

    <Swiper 
    Swiper navigation={true} className="mySwiper"
    breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 55,
        },
      }}
      
      enteredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

    {reseñas.map((x)=>{
      return(
        <SwiperSlide key={x.id}>
          <Resenas coment={x.reseña}/>
        </SwiperSlide>
      )
    })}

    </Swiper>

    </>)

}

export default CarouselResenas