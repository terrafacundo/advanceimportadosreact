import React from "react";
import { Link } from "react-router-dom";


const FiltroBusquedas =()=>{
    return(
        <div className="sector_busqueda_filtros" >
            <Link to="/filt/all" tipo="inicio"><h2 className="texto_boton_busq">Todos</h2></Link>
            <Link to="/filt/iphone" tipo="no-inicio"><h2 className="texto_boton_busq">Iphone</h2></Link>
            <Link to="/filt/ipad" tipo="no-inicio"><h2 className="texto_boton_busq">iPad</h2></Link>
            <Link to="/filt/macbook" tipo="no-inicio"><h2 className="texto_boton_busq">Macbook</h2></Link>
            <Link to="/filt/macstudio" tipo="no-inicio"><h2 className="texto_boton_busq">MacStudio</h2></Link>
            <Link to="/filt/imac" tipo="no-inicio"><h2 className="texto_boton_busq">Imac</h2></Link>
            <Link to="/filt/mineria" tipo="no-inicio"><h2 className="texto_boton_busq">Tarjetas Gráficas / Mineria</h2></Link>
            <Link to="/filt/notebook" tipo="no-inicio"><h2 className="texto_boton_busq">Notebooks</h2></Link>
            <Link to="/filt/smartphones" tipo="no-inicio"><h2 className="texto_boton_busq">Smartphones</h2></Link>
            <Link to="/filt/accesorios" tipo="no-inicio"><h2 className="texto_boton_busq">Accesorios</h2></Link>
            <Link to="/filt/vr" tipo="no-inicio"><h2 className="texto_boton_busq">Vr</h2></Link>
            <Link to="/filt/drones" tipo="no-inicio"><h2 className="texto_boton_busq">Drones</h2></Link>
            <Link to="/filt/go-pro" tipo="no-inicio"><h2 className="texto_boton_busq">Go Pro</h2></Link>
            <Link to="/filt/monitores" tipo="no-inicio"><h2 className="texto_boton_busq">Monitores</h2></Link>
            <Link to="/filt/televisiones" tipo="no-inicio"><h2 className="texto_boton_busq">Televisiones</h2></Link>
            <Link to="/filt/sillas" tipo="no-inicio"><h2 className="texto_boton_busq">Sillas Gamer</h2></Link>
        </div>


    )
}

export default FiltroBusquedas