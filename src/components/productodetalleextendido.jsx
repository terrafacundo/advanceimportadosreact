import React from "react"
import BloqueFotos from "./foto-producto-map"
import ListadoProductosProContainer from "./ListadoProductosProConteiner"
import SeleccionColor from "./seleccion-color-apple-ListContainer"
import SeleccionComponentes from "./seleccion-componentes-apple"
import SeleccionRam from "./seleccion-ram-apple"
import SeleccionTamano from "./seleccion-tamano-apple"
import { useState } from "react"
import PrecioFinal from "../logica-precio-final"



const ProductoDetalleExtendido =({id,secid,nombre,foto,precio,memoria,descripcion,ram,componentes,color,estado,tendencia,marca,categoria})=>{
    
    //TODOS LOS STATES EXPORTADOS DESDE SUS RESPECTIVOS COMPONENTES
    const [configcolor, setconfiguracioncolor] = useState('no capturo nada');

    const configuracionColor=(x)=>{
        setconfiguracioncolor(x)
        console.log('setconfiguracioncolor',configcolor)
    }


    const [configram, setconfiguracionram] = useState("");

    const configuracionRam=(x)=>{
        setconfiguracionram(x)
        console.log('desde el padre',configram)}

    //

    const [configmemo, setconfiguracionMemo] = useState("");

    const configuracionMemo=(x)=>{
        setconfiguracionMemo(x)
        console.log('desde el padre', configmemo)}

    // 
    
    const [configcomponente, setconfiguracionComponentes] = useState("");

    const configuracionComponentes=(x)=>{
        setconfiguracionComponentes(x)
        console.log('desde el padare',configcomponente)}    


        
    if (marca==='apple'){
        return(

            
            <div className="contenedor-pagina-producto-apple">
                <div className="presentacion-apple">
                    <BloqueFotos foto={foto}/>
                    <div className="contenedor-info-seleccion">
                        <h3 className="nombre_producto_ext">{nombre}</h3>
                        <h5 className="precio_producto_ext">Desde: U$D {precio}</h5>

                        <div className="seleccion-tamaño-apple">
                            <h2 className="titulo-seleccion" >Almacenamiento</h2>
                            <div className="contenedor-boton-seleccion">
                            <SeleccionTamano memoria={memoria} id={id} configuracionMemo={configuracionMemo} configmemo={configmemo}></SeleccionTamano>
                            </div>
                        </div>

                        <div className="seleccion-ram-apple">
                            <h2 className="titulo-seleccion">RAM</h2>
                            <div className="contenedor-boton-seleccion">
                                <SeleccionRam ram={ram} configuracionRam={configuracionRam} configram={configram}/>
                            </div>
                        </div>

                        <div className="seleccion-componentes-apple">
                            <h2 className="titulo-seleccion">CPU/GPU</h2>
                            <div className="contenedor-boton-seleccion">
                                <SeleccionComponentes componentes={componentes} configuracionComponentes={configuracionComponentes} configcomponente={configcomponente}></SeleccionComponentes>
                            </div>
                        </div>

                        <div className="seleccion-color-apple">
                            <h2 className="titulo-seleccion">Selecciona un color:</h2>
                            <div className="contenedor-boton-seleccion">
                                <SeleccionColor color={color} colorInicial={configcolor} configuracionColor={configuracionColor} ></SeleccionColor>
                            </div>
                        </div>

                        <PrecioFinal secid={secid}almacenamiento={configmemo} ram={configram} componente={configcomponente} color={configcolor} />
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

    if(marca=!'apple'){
    return(
        <div className="contenedor-pagina-producto-apple">
            <div className="presentacion-apple">
                <BloqueFotos foto={foto}/>
                {/* <img src={foto} className="foto_producto_ext"></img> */}
                <div className="contenedor-info-seleccion">
                    <h3 className="nombre_producto_ext">{nombre}</h3>
                    <h5 className="precio_producto_ext">USD{precio}</h5>

                    <div className="seleccion-tamaño-apple">
                        <h2 className="titulo-seleccion" >Almacenamiento</h2>
                        <div className="contenedor-boton-seleccion">
                        <SeleccionTamano memoria={memoria} id={id}></SeleccionTamano>
                        </div>
                        {/* <div className="tamaño">
                            <div className={`boton.${parseInt(memoria[0])}`}>{memoria[0]}</div>
                            <div className={`boton.${parseInt(memoria[1])}`}>{memoria[1]}</div>
                            <div className={`boton.${parseInt(memoria[2])}`}>{memoria[2]}</div>
                        </div> */}
                    </div>

                    <div className="seleccion-ram-apple">
                        <h2 className="titulo-seleccion">RAM</h2>
                        <div className="contenedor-boton-seleccion">
                            <SeleccionRam ram={ram}/>
                            {/* <div className={`boton.${ram[0]}`}>{ram[0]}</div>
                            <div className={`boton.${ram[1]}`}>{ram[1]}</div>
                            <div className={`boton.${ram[2]}`}>{ram[2]}</div> */}
                        </div>
                    </div>

                    <div className="seleccion-componentes-apple">
                        <h2 className="titulo-seleccion">CPU/GPU</h2>
                        <div className="contenedor-boton-seleccion">
                            <SeleccionComponentes componentes={componentes}></SeleccionComponentes>
                            {/* <div className="boton-componentes">{componentes[0]}</div>
                            <div className="boton-componentes">{componentes[1]}</div>
                            <div className="boton-componentes">{componentes[2]}</div> */}
                        </div>
                    </div>

                    <div className="seleccion-color-apple">
                        <h2 className="titulo-seleccion">Selecciona un color:</h2>
                        <div className="contenedor-boton-seleccion">
                            <SeleccionColor color={color}></SeleccionColor>
                            {/* <div className={`boton.${color[0]}`}>{color[0]}</div>
                            <div className={`boton.${color[1]}`}>{color[1]}</div> */}
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
}



export default ProductoDetalleExtendido