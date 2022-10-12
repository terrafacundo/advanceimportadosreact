import iglogo from "./estaticas/media/iglogo.svg"
import wpplogo from "./estaticas/media/wpplogo.webp"


const BotonesAccesoRapido =()=>{

    return(
        <div className="accesos-directos">
            <a href="https://wa.me/+5401173656656?" target="blank" className="logo-acceso-directo">
                <img src={wpplogo} alt="Acceso directo al Whatsapp de Advance" />
            </a>

            <a href="https://www.instagram.com/advanceimportados/" target="blank" className="logo-acceso-directo">
                <img src={iglogo} alt="Acceso directo al Instagram de Advance" />
            </a>
        </div>
    )
}

export default BotonesAccesoRapido