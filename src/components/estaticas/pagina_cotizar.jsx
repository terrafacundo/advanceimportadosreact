import React from "react";


const PaginaCotizar =()=>{
    return(
        <div className="pagina-cotizar">
            <h2 className="banner-cotizar">COTIZÁ CON NOSOTROS</h2>
            <div className="intro-pagina-cotizar">
                <div className="sub-cotizar">
                    <span className=" material-symbols-outlined angry-animate">link</span>
                    <h2>ENCONTRÁ LINK DE TU PRODUCTO</h2>
                    <p>Ajunta el link de tu producto en tu página de confianza para poder calcular los cosotos.</p>
                </div> 

                <div className="sub-cotizar">
                    <span className="material-symbols-outlined angry-animate">description</span>
                    <h2>RELLENÁ EL FORMULARIO</h2>
                    <p>Completa con la información pedida el formulario, para que una vez que coticemos el producto, te llegue toda la información de la cotización.</p>
                </div>
                
                <div className="sub-cotizar">
                    <span className="material-symbols-outlined angry-animate">forward_to_inbox</span>
                    <h2>ENVIALO</h2>
                    <p>Finalmente, subí tu formulario, y espera nuestro contacto a la brevedad.</p>
                </div>
            </div>

            <iframe src="https://whatsform.com/JjCBWZ" width="100%" height="1000" frameBorder="0"></iframe>
        </div>
    )
}

export default PaginaCotizar