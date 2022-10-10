import DetalleDescripcionProductoExtendidoInfo from "./detalle-desc-pr-ext-listas"


const DetalleDescripcionProductoExtendido =({desglosado})=>{
    let interno = desglosado.info
    let titulo = interno.titulo
    let lista = interno.lista
    return(
        <div>
            <h1>{titulo}</h1>
            <DetalleDescripcionProductoExtendidoInfo lista={lista}></DetalleDescripcionProductoExtendidoInfo>
        </div>
    )
}

export default DetalleDescripcionProductoExtendido