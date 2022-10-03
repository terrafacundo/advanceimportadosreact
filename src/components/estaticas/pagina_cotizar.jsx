import React from "react";


const PaginaCotizar =()=>{
    return(
        <div className="pagina-cotizar">
            <h2>¿Qué necesitas para cotizar tu producto con nosotros?</h2>
            <p>¿No encontraste eso que buscabas? Llená el formulario con la información necesaria para que te ayudemos a tener lo que buscás.</p>
            <div className="intro-pagina-cotizar">
                <div className="sub-cotizar">
                    <span className=" material-symbols-outlined">link</span>
                    <h2>Busca el link de tu producto</h2>
                </div> 

                <div className="sub-cotizar">
                    <span className="material-symbols-outlined">description</span>
                    <h2>Completá el formulario con tus datos de contacto</h2>
                </div>
                
                <div className="sub-cotizar">
                    <span className="material-symbols-outlined">forward_to_inbox</span>
                    <h2>Envianos tu formulario</h2>
                </div>
            </div>

            <iframe src="https://whatsform.com/JjCBWZ" width="100%" height="1000" frameBorder="0"></iframe>
        </div>
    )
}

export default PaginaCotizar