import React from "react";

import {Link} from 'react-router-dom';

const NavBar =(seccion)=>{
    return(
        <div className="div_ul_nav" id="div_ul_nav">
            <ul className="ul_nav" id="ul_nav">  
                <li className="ul_nav_links"><Link to={`/filt/all`}>{seccion.a}</Link></li>
                <li className="ul_nav_links"><Link to={`/${seccion.b}`}>{seccion.b}</Link></li>
                <li className="ul_nav_links"><Link to={`/${seccion.c}`}>{seccion.c}</Link></li>
                <li className="ul_nav_links"><Link to={`/${seccion.d}`}>{seccion.d}</Link></li>
                <li className="ul_nav_links"><Link to={`/${seccion.e}`}>{seccion.e}</Link></li>
            </ul>
        </div>
    )
}

export default NavBar