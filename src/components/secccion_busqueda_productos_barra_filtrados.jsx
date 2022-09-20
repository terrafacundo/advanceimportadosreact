import React from "react";
import { Link } from "react-router-dom";


const FiltroBusquedas =()=>{
    return(
        <div className="sector_busqueda_filtros" >
            <Link to="/productos" clas><h2 className="texto_boton_busq">Todos</h2></Link>
            <Link to="/filt/iphone" clas><h2 className="texto_boton_busq">Iphone</h2></Link>
            <Link to="/filt/macbook"><h2 className="texto_boton_busq">Macbook</h2></Link>
            <Link to="/filt/mineria"><h2 className="texto_boton_busq">Tarjetas Gráficas / Mineria</h2></Link>
            <Link to="/filt/notebook"><h2 className="texto_boton_busq">Notebooks</h2></Link>
            <Link to="/filt/vr"><h2 className="texto_boton_busq">Vr</h2></Link>
            <Link to="/filt/monitores"><h2 className="texto_boton_busq">Monitores</h2></Link>
        </div>


    )
}

export default FiltroBusquedas