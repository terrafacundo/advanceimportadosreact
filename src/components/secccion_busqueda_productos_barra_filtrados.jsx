import React from "react";
import { Link } from "react-router-dom";


const FiltroBusquedas =()=>{
    return(
        <div className="sector_busqueda_filtros" >
            <Link to="/filt/all" tipo="inicio"><h2 className="texto_boton_busq">Todos</h2></Link>
            <Link to="/filt/iphone" tipo="no-inicio"><h2 className="texto_boton_busq">Iphone</h2></Link>
            <Link to="/filt/macbook" tipo="no-inicio"><h2 className="texto_boton_busq">Macbook</h2></Link>
            <Link to="/filt/mineria" tipo="no-inicio"><h2 className="texto_boton_busq">Tarjetas Gráficas / Mineria</h2></Link>
            <Link to="/filt/notebook" tipo="no-inicio"><h2 className="texto_boton_busq">Notebooks</h2></Link>
            <Link to="/filt/vr" tipo="no-inicio"><h2 className="texto_boton_busq">Vr</h2></Link>
            <Link to="/filt/monitores" tipo="no-inicio"><h2 className="texto_boton_busq">Monitores</h2></Link>
        </div>


    )
}

export default FiltroBusquedas