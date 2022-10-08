const SeleccionComponenteDetalle = ({configcomponente,elemento,configuracionComponentes}) =>{

    return(
        <div className={elemento===configcomponente ? 'boton-seleccion active' : 'boton-seleccion'} onClick={()=>{configuracionComponentes(`${elemento}`)}}>{elemento}</div>
    )
}


export default SeleccionComponenteDetalle