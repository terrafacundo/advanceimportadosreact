import DetalleDescripcionProductoMap from "./detalle-desc-pr-map"

const DetalleDescripcionProducto = ({descripcion}) =>{
    return(
        <div>
            <h1 className="titulo-sector-descripcion">Descripcion</h1>
            <DetalleDescripcionProductoMap descripcion={descripcion}></DetalleDescripcionProductoMap>
        </div>
    )
}

export default DetalleDescripcionProducto