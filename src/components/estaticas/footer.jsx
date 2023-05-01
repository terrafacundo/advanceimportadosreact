import React from "react";
import { Link } from "react-router-dom";
import PreguntasFrec from "../preguntasfrec";
import instagram from "./media/instagram.svg"
import email from "./media/mail.svg"


const Footer=()=>{
    return(
    
    <footer className="footer_settings">
        <div className="pre_footer">
            <h2 className="prefooter_letra">Suscribite al Newsletter</h2>
            <div>
                <form action="">
                    <input className="newsletter_input" type="email"/>
                    <button className="newsletter_boton" type="submit">Enviar</button>
                </form>
            </div>

        </div>

        <div className="footer-links">
            <div className="mas-redes">
                <a href="https://www.instagram.com/advanceimportados/" target="_blank">Visitá nuestro Instagram</a>
                <a href="mailto:advanceimportados@gmail.com">Contactanos por Mail</a>
            </div>

            <div className="mas-info">
                <Link to ={'/PyR'}>Metodología de encargos</Link>
                <Link to={'/PyR'}>Forma de Entrega</Link>
        </div>
        </div>
        <div className="footer-derechos">
            <h6>Este sitio pertenece a Advance Importados. Todos los derechos reservados. Advance Importados 2023 ®.</h6>
        </div>
    </footer>
    )

}

export default Footer