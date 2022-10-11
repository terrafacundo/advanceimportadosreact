import DetalleDescripcionProductoExtendido from "./detalle-desc-pr-ext";


const DetalleDescripcionProductoMap =({descripcion})=>{
    return(
    descripcion.map((x) =>(
    <DetalleDescripcionProductoExtendido desglosado={x}></DetalleDescripcionProductoExtendido>
    )));
}

export default DetalleDescripcionProductoMap