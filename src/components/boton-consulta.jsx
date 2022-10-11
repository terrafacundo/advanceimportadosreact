import { Link } from "react-router-dom"

const BotonConsulta = ({nombre,almacenamiento,ram,componente,color}) =>{
    if(nombre!="" && almacenamiento!="" && ram!="" && componente!="" && color!=""){
    return(
    <a href={`https://wa.me/+5401173656656?text=Consulto%20acerca%20de%20"${nombre}"%20de%20${almacenamiento}%20de%20Almacenamiento,%20con%20${ram}%20de%20Ram,%20${componente}%20y%20color%20${color}`}>
        <div className="boton-consulta-wpp">Ir a Whatsapp</div>
    </a>
    )}
}

export default BotonConsulta

// 1173656656