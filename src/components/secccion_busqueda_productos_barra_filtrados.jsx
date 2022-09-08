import React from "react";
import { Link } from "react-router-dom";


const FiltroBusquedas =()=>{
    return(
        <div className="sector_busqueda_filtros" >
            <Link to="/productos" clas><h2 className="texto_boton_busq">Todos</h2></Link>
            <Link to="/filt/apple"><h2 className="texto_boton_busq">Apple</h2></Link>
            <Link to="/filt/gaming"><h2 className="texto_boton_busq">Gaming</h2></Link>
            <Link to="/filt/mineria"><h2 className="texto_boton_busq">Mineria</h2></Link>
            <Link to="/filt/notebook"><h2 className="texto_boton_busq">Notebooks</h2></Link>
        </div>


    )
}

export default FiltroBusquedas