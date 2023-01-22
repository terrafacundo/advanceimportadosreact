import React from "react";

import {Routes,Route} from 'react-router-dom';
import Indexadvance from "./estaticas/indexadvance";
import PaginaApple from "./estaticas/pagina_apple";
import ProductoDetalleExtContainer from "./productodetallecontainer";
import SeccionBusquedaProductos from "./seccion_busqueda_productos";
import PaginaNosotros from "./estaticas/pagina_nosotros";
import PaginaGaming from "./estaticas/pagina_gaming";
import PaginaCotizar from "./estaticas/pagina_cotizar";
import BotonesAccesoRapido from "./botones-wpp-ig";

const Main = () => {

    return(
            <Routes>
                <Route path='/' element={<Indexadvance/>}/>
                <Route path='/productos/:id_link' element={<ProductoDetalleExtContainer/>}/>
                <Route path='/Productos' element={<SeccionBusquedaProductos/>}/>
                <Route path='/filt/:tipo' element={<SeccionBusquedaProductos/>}/>
                <Route path='/Apple' element={<PaginaApple/>}/>
                <Route path='/Nosotros' element={<PaginaNosotros/>}/>
                <Route path='/Gaming' element={<PaginaGaming/>}/>
                <Route path='/Cotizar' element={<PaginaCotizar/>}/>
            </Routes>
    )
}

export default Main