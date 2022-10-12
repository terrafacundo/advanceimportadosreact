
const DetalleDescripcionProductoExtendidoInfo =({lista})=>{  
    const lista_part = lista 
    return(
    lista_part?.map((x)=>(
        <li className="desc-listas">{x}</li>
        )))    
}

export default DetalleDescripcionProductoExtendidoInfo