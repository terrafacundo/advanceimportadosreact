
const SeleccionColorDetalle = ({coloreado,configuracionColor,colorInicial})=>{

    return(
        <div className={coloreado===colorInicial ? `boton-${coloreado} active` : `boton-${coloreado}`}
        onClick={()=>{configuracionColor(coloreado)}
        // modificadorClase(clase)
    }></div>
    )
}

export default SeleccionColorDetalle