import React from "react";
import ListadoProductosContainer from "./productoListContainer";


const Pestañaproductos =()=>{

    return(
        <section class="contenedor_productos">
            <div class="sector_busqueda_filtros">
                <div clasName="buscador">
                        <input class="form-control me-2" type="text" placeholder="Buscar producto" id="input_busqueda_productos" aria-label="Search"/>
                </div>

                <div>
                    <div id="boton_todos" class="boton_busqueda">
                        <h5 class="texto_boton_busq">Todos</h5>
                    </div>

                    <div id="boton_busqueda_apple" class="boton_busqueda">
                        <h5 class="texto_boton_busq">Appless</h5>
                    </div>

                    <div id="boton_busqueda_gaming" class="boton_busqueda">
                        <h5 class="texto_boton_busq">Gaming</h5>
                    </div>

                    <div id="boton_busqueda_mineria" class="boton_busqueda">
                        <h5 class="texto_boton_busq">Minería</h5>
                    </div>

                    <div id="boton_busqueda_accesorios" class="boton_busqueda">
                        <h5 class="texto_boton_busq">Accesorios</h5>
                    </div>

                </div>
            </div>

            <productoListContainer/>

        </section>
    )
}

export default Pestañaproductos