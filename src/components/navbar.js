import React from "react";

import {Link} from 'react-router-dom';

const NavBar =(seccion)=>{
    return(
        <ul className="ul_nav">  
            <li><Link to={`/${seccion.a}`}>{seccion.a}</Link></li>
            <li><Link to={`/${seccion.b}`}>{seccion.b}</Link></li>
            <li><Link to={`/${seccion.c}`}>{seccion.c}</Link></li>
            <li><Link to={`/${seccion.d}`}>{seccion.d}</Link></li>
            <li><Link to={`/${seccion.e}`}>{seccion.e}</Link></li>
        </ul>
    )
}

export default NavBar