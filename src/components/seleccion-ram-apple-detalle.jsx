
const SeleccionRamDetalle = ({configram,configuracionRam,elemento}) =>{

    return(
        <div className={elemento===configram ? 'boton-seleccion active' : 'boton-seleccion'} onClick={()=>{configuracionRam(`${elemento}`)}}>{elemento}</div>
    )
}


export default SeleccionRamDetalle