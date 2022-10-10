import DetalleDescripcionProductoExtendido from "./detalle-desc-pr-ext";


const DetalleDescripcionProductoMap =({descripcion})=>{
    return(
    descripcion.map((x) =>(
    <DetalleDescripcionProductoExtendido key={x} desglosado={x}></DetalleDescripcionProductoExtendido> 
    )));
}

export default DetalleDescripcionProductoMap