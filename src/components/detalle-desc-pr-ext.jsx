import DetalleDescripcionProductoExtendidoInfo from "./detalle-desc-pr-ext-listas"


const DetalleDescripcionProductoExtendido =({desglosado})=>{
    let interno = desglosado.info
    let titulo = interno.titulo
    let lista = interno.lista
    return(
        <div key={titulo} className="contenedor-sector-descripcion-sub">
            <h1 className="titulo-sector-descripcion-b">{titulo}</h1>
            <ul>
            <DetalleDescripcionProductoExtendidoInfo key={titulo} lista={lista}></DetalleDescripcionProductoExtendidoInfo>
            </ul>
        </div>
    )
}

export default DetalleDescripcionProductoExtendido