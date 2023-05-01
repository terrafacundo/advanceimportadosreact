import React from "react";
import nosotros from "./media/nosotros-foto.jpg"


const PaginaNosotros =()=>{
    return(
        <div className="pagina-cotizar">     
                <h2 className="banner-cotizar">NOSOTROS</h2>
            <div className="contenido-pag-nosotros">
            <section>
                <img className="nosotros-foto"src={nosotros}></img>
                <article className="texto-nosotros">
                    Somos Pedro Aguirre y Nahuel Gómez de Advance Importados que inició en marzo del 2020, por un simple amor a la tecnología, comenzando vendiendo a la familia y amigos para luego avanzar a lo profesional teniendo nuestra primera oficina, logística a todo el país y un equipo de trabajo tanto en redes como distribución
                    </article>
            </section>
            <section >
                <article className="texto-nosotros">
                Nos destacamos frente a los demás por la confianza que damos, ya que no solo vendemos el producto, sino también una experiencia. Nuestro objetivo es que el cliente tenga la mejor atención de compra como seguridad de la misma.
                </article>
            </section>
            <section>
                <article className="texto-nosotros">
                Cada vez que recibimos una consulta sobre un producto nos gusta conversar con el cliente para saber su utilidad, de esta manera podemos asesorar y recomendar un producto que acompañe su verdadera necesidad. Que el cliente tenga un seguimiento sobre el estado de su producto en todo momento es de fundamental importancia
                </article>
            </section>
            </div>
        </div>
    )
}

export default PaginaNosotros