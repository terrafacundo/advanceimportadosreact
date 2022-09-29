import React from "react";
import arrow_back from "./estaticas/media/arrow_back.svg" ;
import arrow_next from "./estaticas/media/arrow_next.svg" ;
import { useState } from "react";

const BloqueFotos=({foto})=>{

    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectedImage, setselectedImage] = useState(foto[0]);

    const previo =()=>{
        const condicion = selectedIndex > 0;
        const proxIndice = condicion ? selectedIndex -1 : foto.length-1;
        setselectedImage(foto[proxIndice]);
        setSelectedIndex(foto[proxIndice]);
    }

    const proximo =()=>{
        const condicion = selectedIndex < foto.length-1 ;
        const antIndice =  condicion ? selectedIndex +1 : 0;
        setselectedImage(foto[antIndice]);
        setSelectedIndex(antIndice);
    }


    return(
        <div className="container-foto-flechas">
            <div className="contenedor-foto-producto">
                <img className="foto-producto-apple" src={selectedImage}/>
            </div>
            <div className="flechas">
                <img  className="flecha-individual" src={arrow_back} onClick={previo}></img>
                <img  className="flecha-individual" onClick={proximo}src={arrow_next}></img>
            </div>
        </div>   
    )
}

export default BloqueFotos