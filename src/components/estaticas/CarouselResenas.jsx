
import React from 'react';
import Resenas from "./resens";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




const CarouselResenas = () => {
  return (
    <Carousel responsive={responsive}>
        <Resenas coment={"La atención fue muy rápida."}/>
        <Resenas coment={"Excelente todo."}/>
        <Resenas coment={"Por ahora todo perfecto, la atención y la rapidez."}/>
        <Resenas coment={"Muy buena atención."}/>
        <Resenas coment={"En dos dias retire el producto en persona, hasta el momento unos genios por el trato recibido."}/>
        <Resenas coment={"Sigan así , excelente atención. Saludos."}/>
    </Carousel>)
}

export default CarouselResenas