import React from "react"
import { useParams } from "react-router-dom"
import ListadoProductos from "./ListadoProductos"
import ListadoProductosProContainer from "./ListadoProductosProConteiner"
import SeleccionTamano from "./seleccion-tamano-apple"



const ProductoDetalleExtendido =({id,nombre,foto,precio,memoria,descripcion,ram,componentes,color,estado,tendencia,marca,categoria})=>{

    console.log(categoria)
    if (marca==='apple'){
        return(
            <div className="contenedor-pagina-producto-apple">
                <div className="presentacion-apple">
                    <img className="foto_producto_ext"></img>
                    <div className="contenedor-info-seleccion">
                        <h3 className="nombre_producto_ext">{nombre}</h3>
                        <h5 className="precio_producto_ext">USD{precio}</h5>

                        <div className="seleccion-tamaño-apple">
                            <h2 className="titulo-seleccion" >Selecciona el almacenamiento:</h2>
                            <SeleccionTamano memoria={memoria} id={id}></SeleccionTamano>
                            {/* <div className="tamaño">
                                <div className={`boton.${parseInt(memoria[0])}`}>{memoria[0]}</div>
                                <div className={`boton.${parseInt(memoria[1])}`}>{memoria[1]}</div>
                                <div className={`boton.${parseInt(memoria[2])}`}>{memoria[2]}</div>
                            </div> */}
                        </div>

                        <div className="seleccion-ram-apple">
                            <h2 className="titulo-seleccion">Selecciona un tamaño de RAM:</h2>
                            <div className="colores">
                                <div className={`boton.${ram[0]}`}>{ram[0]}</div>
                                <div className={`boton.${ram[1]}`}>{ram[1]}</div>
                                <div className={`boton.${ram[2]}`}>{ram[2]}</div>
                            </div>
                        </div>

                        <div className="seleccion-componentes-apple">
                            <h2 className="titulo-seleccion">Selecciona CPU/GPU:</h2>
                            <div className="colores">
                                <div className="boton-componentes">{componentes[0]}</div>
                                <div className="boton-componentes">{componentes[1]}</div>
                                <div className="boton-componentes">{componentes[2]}</div>
                            </div>
                        </div>

                        <div className="seleccion-color-apple">
                            <h2 className="titulo-seleccion">Selecciona un color:</h2>
                            <div className="colores">
                                <div className={`boton.${color[0]}`}>{color[0]}</div>
                                <div className={`boton.${color[1]}`}>{color[1]}</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="sector-desc-apple">
                    
                </div>

                
                <div className="sector-productos-relacionados">
                <h3 className="sector-productos-relacionados-titulo">Productos Relacionados</h3>
                <ListadoProductosProContainer pagina="pr-rel" categoria={categoria}></ListadoProductosProContainer>
                </div>
            </div>
        )
    }

    else{
    return(
        <div className="contenedor_pagina_producto" key={id}>
            <img className="foto_producto_ext" src={foto}></img>
            <h3 className="nombre_producto_ext">{nombre}</h3>
            <h5 className="precio_producto_ext">ARS {precio}</h5>
            <div className="sector-descripcion">
                <h6 className="descripcion_producto_ext">Descripción:{descripcion}</h6>
            </div>

            <div className="sector-productos-relacionados">
                <h3 className="sector-productos-relacionados-titulo">Productos Relacionados</h3>
                <ListadoProductosProContainer pagina="pr-rel" categoria={categoria}></ListadoProductosProContainer>
            </div>
        </div>

    )
    }

}

export default ProductoDetalleExtendido