const SeleccionTamanoDetalle = ({configmemo,configuracionMemo,elemento}) =>{

    return(
        <div className={elemento===configmemo ? 'boton-seleccion active' : 'boton-seleccion'} onClick={()=>{configuracionMemo(`${elemento}`)}}>{elemento}</div>
    )
}


export default SeleccionTamanoDetalle