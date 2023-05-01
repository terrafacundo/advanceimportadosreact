import { Link } from "react-router-dom"


const PrecioFinal = ({secid,almacenamiento,ram,componente,color,precio}) => {



    //MacBook M1 AIR 13,3" --- 'mb-m1-air-13'
    //1
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <div className="precio-final">U$D 1040</div>
        )
    }
    //2
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <div className="precio-final">U$D 1040</div>
        )
    }
    //3
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <div className="precio-final">U$D 1040</div>
        )
    }
    //4
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //5
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //6
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='16GB' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>U$D 1620</div>
            </Link>
        )
    }
    //7
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //8
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //10
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //11
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //12    
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
    }
    //14
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
    }
    //15
    if(secid==='mb-m1-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
    }
    //16
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //17
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //18
    if(secid==='mb-m1-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //19
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //20
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21
    if(secid==='mb-m1-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //22
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //23
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //24
    if(secid==='mb-m1-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/7GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }



    //MacBook M2 AIR 13,6" --- 'mb-m2-air-13'
    //1 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <>
            <div className="precio-final">U$D 1330</div>
            </>
        )
    }    
    //2
    if(secid==='mb-m2-air-13' && almacenamiento==='GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            // <>
            // <div className="precio-final" >U$D 1440</div>
            // <h6 className="precio-final-vers-esp">VERSION ESPAÑOL: u$ 1480</h6>
            // </>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //3
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            // <>
            // <div className="precio-final" >U$D 1440</div>
            // <h6 className="precio-final-vers-esp">VERSION ESPAÑOL: u$ 1480</h6>
            // </>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //4
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final">U$D 1460</div>
        )
    }
    //5 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //6
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //7
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //8
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //10
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //11
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //12
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //14
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //16
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }           
    //17 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //18
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //19
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //20
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21 
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //22
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //23
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //24
    if(secid==='mb-m2-air-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //1 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <>
            <div className="precio-final">U$D 1440</div>
            <h6 className="precio-final-vers-esp">VERSION ESPAÑOL: u$ 1480</h6>
            </>
        )
    }    
    //2
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <>
            // <div className="precio-final">U$D 1440</div>
            // <h6 className="precio-final-vers-esp">VERSION ESPAÑOL: u$ 1480</h6>
            // </>
        )
    }
    //3
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <>
            // <div className="precio-final">U$D 1440</div>
            // <h6 className="precio-final-vers-esp">VERSION ESPAÑOL: u$ 1480</h6>
            // </>
        )
    } 
    //4
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final">U$D 1460</div>
        )
    }
    //5 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //6
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final">U$D 1940</div>
        )
    }
    //7
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            // <div className="precio-final">U$D 1940</div>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            // <div className="precio-final">U$D 1940</div>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }  
    //8
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //10
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //11
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //12
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //14
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //16
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }           
    //17 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //18
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //19
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //20
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21 
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //22
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //23
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //24
    if(secid==='mb-m2-air-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //1 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //2
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //3
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //4
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //5 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //6
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //7
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }  
    //8
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //10
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //11
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //12
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //14
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //16
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }           
    //17 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //18
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //19
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //20
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21 
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //22
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //23
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //24
    if(secid==='mb-m2-air-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //1
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //2
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //3
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //4
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //5 
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //6
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //7
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='8GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }  
    //8
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9 
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //10
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //11
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //12
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13 
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //14
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //16
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }           
    //17 
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //18
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //19
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //20
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21 
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }    
    //22
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //23
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='gold'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //24
    if(secid==='mb-m2-air-13' && almacenamiento==='2TB' && ram==='24GB' && componente==='CPU 8GB/10GB GPU' && color==='midnight'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 



    //MACBOOK PRO M2 13,6" --- mb-m2-pro-13

    //1
    if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            // <>
            // <div className="precio-final">U$D 1370</div>
            // <h6 className="precio-final-vers-esp">Edicion Español: u$ 1525</h6>
            // </>
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            )
    }
    //2
    // if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
    //     return(
    //         <>
    //         <div className="precio-final">u$ 1495</div>
    //         <h6 className="precio-final-vers-esp">Edicion Español: u$ 1525</h6>
    //         </>
    //     )
    // }
    //3
    if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //4
    if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //5
    if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //6
    if(secid==='mb-m2-pro-13' && almacenamiento==='256GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }     
    //7
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            // <>
            // <div className="precio-final">u$ 1825</div>
            // <h6 className="precio-final-vers-esp">Edicion Español: u$ 1856</h6>
            // </>
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
            )
    }
    //8
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='8GB' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <>
            // <div className="precio-final">U$D 1560</div>
            // </>
        )
    }
    //9
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <>
            // <div className="precio-final">U$D 2100</div>
            // </>
        )
    }
    //10
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //11
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //12
    if(secid==='mb-m2-pro-13' && almacenamiento==='512GB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //13
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //14
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='8GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final-vers-esp">u$d 2710 Edicion español</div>
            
        )
    }
    //16
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //17
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //18
    if(secid==='mb-m2-pro-13' && almacenamiento==='1TB' && ram==='24GB' && componente==='CPU 8GB/8GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   


    // MACBOOK M1 PRO 14,2 --- 'mb-m1-pro-14'
    
    //1
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //2
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //3
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //4
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //5
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //6
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //7
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //8
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //9
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //10
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //11
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //12
    if(secid==='mb-m1-pro-14' && almacenamiento==='256GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //13
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final-vers-esp">u$ 2.545 Edicion Español</div>
        )
    }
    //14
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //15
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //16
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //17
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //18
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //19
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //20
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //21
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <div className="precio-final">U$D 3260</div>
        )
    }
    //22
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
            // <div className="precio-final">U$D 3260</div>
        )
    }   
    //23
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //24
    if(secid==='mb-m1-pro-14' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //25
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB'  && color==='space'){
        return(
            // <div>U$D 2.450</div>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //26
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //27
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //28
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //29
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            // <div className="precio-final">U$D 2.930</div>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //30
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            // <div className="precio-final">U$D 2.930</div>
            <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //31
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //32
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //33
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //34
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //35
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //36
    if(secid==='mb-m1-pro-14' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //37
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //38
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //39
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //40
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //41
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //42
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //43
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //44
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //45
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //46
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //47
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //48
    if(secid==='mb-m1-pro-14' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //49
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //50
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //51
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //52
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //53
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //54
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //55
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //56
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //57
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //58
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //59
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //60
    if(secid==='mb-m1-pro-14' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 
    //61
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //62
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //63
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //64
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //65
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //66
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //67
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //68
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 8GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //69
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //70
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/14GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }   
    //71
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    }
    //72
    if(secid==='mb-m1-pro-14' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
        return(
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        )
    } 


// MacBook M1 MAX --- 'mb-m1-MAX'

//1
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//2
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//3
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//4
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//6
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//7
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//8
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//9
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//10
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//11
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//12
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//13
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//14
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//15
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//16
if(secid==='mb-m1-MAX' && almacenamiento==='512GB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//17
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//18
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//19
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//20
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//21
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//22
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//23
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//24
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//25
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//26
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//27
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//28
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//29
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//30
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//31
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//32
if(secid==='mb-m1-MAX' && almacenamiento==='1TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//1
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//2
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//3
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//4
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//6
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//7
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//8
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//9
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//10
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//11
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//12
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//13
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//14
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//15
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//16
if(secid==='mb-m1-MAX' && almacenamiento==='2TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//1
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//2
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//3
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//4
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//6
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//7
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//8
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//9
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//10
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//11
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//12
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//13
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//14
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//15
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//16
if(secid==='mb-m1-MAX' && almacenamiento==='4TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//1
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//2
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//3
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//4
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//8
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//7
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//8
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/24GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//9
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//10
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//11
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//12
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//13
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//14
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//15
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
} 
//16
if(secid==='mb-m1-MAX' && almacenamiento==='8TB' && ram==='64GB' && componente==='CPU 10GB/32GB GPU' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}

// MACBOOK M1 PRO 16 --- MacBook M1 PRO 16,2"

//1
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//2
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//3
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//4
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <div className="precio-final">U$D 3760</div>
    )
}
//6
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        // <div className="precio-final">U$D 3760</div>
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
//7
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//8
if(secid==='mb-m1-pro-16' && almacenamiento==='512GB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//1
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        // <div className="precio-final-vers-esp">U$D 3205 Edición Español</div>
    )
}
//2
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
        // <div className="precio-final-vers-esp">U$D 3205 Edición Español</div>
    )
}
//3
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//4
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//6
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//7
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//8
if(secid==='mb-m1-pro-16' && almacenamiento==='1TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}

//1
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//2
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//3
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//4
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//6
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//7
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//8
if(secid==='mb-m1-pro-16' && almacenamiento==='2TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}

//1
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//2
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//3
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//4
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//6
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//7
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//8
if(secid==='mb-m1-pro-16' && almacenamiento==='4TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}

//1
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//2
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//3
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//4
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='16GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//5
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//6
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/16GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//7
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//8
if(secid==='mb-m1-pro-16' && almacenamiento==='8TB' && ram==='32GB' && componente==='CPU 10GB/24GB GPU' && color==='silver'){
    return(
        <Link to='/Cotizar' className="cotizar">
        <div>Producto disponible para cotizar</div>
        </Link>
    )
}
//1
if(secid==='quest2' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 399</div>
    )
}
//2
if(secid==='quest2' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 499</div>
    )
}

//watch-SE-2da
if(secid==='watch-SE-40mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 350</div>
    )
}

//watch-4
if(secid==='watch-SE-44mm' && color==='silver'){
    return(
        <div className="precio-final">U$D 380</div>
    )
}
if(secid==='watch-SE-44mm'&& color==='midnight'){
    return(
        <div className="precio-final">U$D 380</div>
    )
}
if(secid==='watch-SE-44mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <>
            <div className="precio-final"> c/ CELL: U$D 495</div>
            <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
            </Link>
        </>
    )
}


//watch-2
if(secid==='watch-3-38mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 499</div>
    )
}
//watch-3
if(secid==='watch-3-38mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='gray'){
    return(
        <div className="precio-final">U$D 499</div>
    )
}


//watch-6
if(secid==='watch-7-41mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <div className="precio-final">U$D 430</div>
    )
}
//watch-7
if(secid==='watch-7-41mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='green'){
    return(
        <div className="precio-final">U$D 430</div>
    )
}
//watch-8
if(secid==='watch-7-45mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='red'){
    return(
        <div className="precio-final">U$D 450</div>
    )
}
//watch-9
if(secid==='watch-7-45mm' && almacenamiento==='-' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <div className="precio-final">U$D 480</div>
    )
}
//watch-8-41mm
if(secid==='watch-8-41mm' && color==='midnight'){
    return(
        <>
            <div className="precio-final">U$D 475</div>
            <div>c/CELL: U$ 710</div>
        </>
    )
}

if(secid==='watch-8-41mm' && color==='starlight'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if(secid==='watch-8-41mm' && color==='silver'){
    return(
        <>
            <div className="precio-final">U$D 475</div>
            <div>c/CELL: U$ 710</div>
        </>
    )
}

//watch-8-45mm
if(secid==='watch-8-45mm' && color==='midnight'){
    return(
        <>
            <div className="precio-final">U$D 495</div>
            <div>c/CELL: U$ 740</div>
        </>
    )
}

if(secid==='watch-8-45mm' &&color==='starlight'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}
if(secid==='watch-8-45mm' && color==='red'){
    return(
        <>
        <div className="precio-final">U$D 495</div>
        <div>c/CELL: U$ 740</div>
    </>
    )
}

//iphone 11
if(secid==='iphone-11' && almacenamiento==='64GB' && ram==='-' && componente==='-' && color==='black'){
    return(
        <div className="precio-final">U$D 540</div>
    )
}
if(secid==='iphone-11' && almacenamiento==='64GB' && ram==='-' && componente==='-' && color==='white'){
    return(
        <div className="precio-final">U$D 540</div>
    )
}
if(secid==='iphone-11' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='black'){
    return(
        <div className="precio-final">U$D 620</div>
    )
}
if(secid==='iphone-11' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='white'){
    return(
        <div className="precio-final">U$D 620</div>
    )
}

//iphone 13

if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 810</div>
    )
}
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <div className="precio-final">U$D 810</div>
    )
}
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <div className="precio-final">U$D 800</div>
    )
}
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='green'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='pink'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-13' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-13' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-13' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='pink'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}


//iphone-14
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 905</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <div className="precio-final">U$D 905</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 905</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <div className="precio-final">U$D 905</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}

if(secid==='iphone-14' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1115</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-14' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1115</div>
    )
}
if(secid==='iphone-14' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='blue'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
        </Link>
    )
}
if(secid==='iphone-14' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='starlight'){
    return(
        <Link to='/Cotizar' className="cotizar">
                <div>Producto disponible para cotizar</div>
        </Link>
    )
}


//iphone 14 plus

if(secid==='iphone-14-ps' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <Link to='/Cotizar' className="cotizar">
                        <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-14-ps' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1030</div>
    )
}

//iphone 14 pro

if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1150</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1160</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}




if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1260</div>
    )
}




if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1470</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1490</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1490</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1470</div>
    )
}



if(secid==='iphone-14-pro' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1670</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1670</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1670</div>
    )
}
if(secid==='iphone-14-pro' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1670</div>
    )
}






//IPHONE 14 PRO MAX
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color===('midnight')){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1240</div>
    )
}



if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color===('midnight')){
    return(
        <div className="precio-final">U$D 1340</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1340</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1370</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1340</div>
    )
}




if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1610</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <div className="precio-final">U$D 1580</div>
       )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1580</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1580</div>
    )
}



if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='purple'){
    return(
        <div className="precio-final">U$D 1780</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='silver'){
    return(
        <div className="precio-final">U$D 1780</div>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='midnight'){
    return(
        <Link to='/Cotizar' className="cotizar">
                        <div>Producto disponible para cotizar</div>
            </Link>
    )
}
if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='-' && color==='gold'){
    return(
        <Link to='/Cotizar' className="cotizar">
                        <div>Producto disponible para cotizar</div>
            </Link>
    )
}





//iphone-15
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='blue'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
//iphone-16
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
//iphone-17
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='red'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
//iphone-18
if(secid==='iphone-14' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='starlight'){
    return(
        <div className="precio-final">U$D 1080</div>
    )
}
//iphone-19
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1180</div>
    )
}
//iphone-20
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='blue'){
    return(
        <div className="precio-final">U$D 1180</div>
    )
}
//iphone-21
if(secid==='iphone-14' && almacenamiento==='256GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='midnight'){
    return(
        <div className="precio-final">U$D 1180</div>
    )
}

//iphone-22
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 1450</div>
    )
}
//iphone-23
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1450</div>
    )
}
//iphone-24
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 1450</div>
    )
}
//iphone-25
if(secid==='iphone-14-pro' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 1450</div>
    )
}
//iphone-26
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 1570</div>
    )
}
//iphone-27
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1570</div>
    )
}
//iphone-28
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 1570</div>
    )
}
//iphone-29
if(secid==='iphone-14-pro' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 1570</div>
    )
}
//iphone-30
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-31
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-32
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-33
if(secid==='iphone-14-pro' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}

//iphone-34
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 1710</div>
    )
}
//iphone-35
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1710</div>
    )
}
//iphone-36
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 1710</div>
    )
}
//iphone-37
if(secid==='iphone-14-pro-max' && almacenamiento==='128GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 1710</div>
    )
}

//iphone-38
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-39
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-40
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}
//iphone-41
if(secid==='iphone-14-pro-max' && almacenamiento==='256GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 1800</div>
    )
}

//iphone-42
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='black'){
    return(
        <div className="precio-final">U$D 2100</div>
    )
}
//iphone-43
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 2100</div>
    )
}
//iphone-44
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 2100</div>
    )
}
//iphone-45
if(secid==='iphone-14-pro-max' && almacenamiento==='512GB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='gold'){
    return(
        <div className="precio-final">U$D 2100</div>
    )
}

//iphone-46
if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='silver'){
    return(
        <div className="precio-final">U$D 2350</div>
    )
}
//iphone-47
if(secid==='iphone-14-pro-max' && almacenamiento==='1TB' && ram==='-' && componente==='A16 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='purple'){
    return(
        <div className="precio-final">U$D 2350</div>
    )
}


//iphone-48
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)' && color==='midnight'){
    return(
        <div className="precio-final">U$D 900</div>
    )
}
//iphone-49
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)' && color==='blue'){
    return(
        <div className="precio-final">U$D 900</div>
    )
}

//iphone-50
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)' && color==='green'){
    return(
        <div className="precio-final">U$D 900</div>
    )
}
//iphone-51
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)' && color==='red'){
    return(
        <div className="precio-final">U$D 900</div>
    )
}
//iphone-52
if(secid==='iphone-13' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 4 núcleos)' && color==='starlight'){
    return(
        <div className="precio-final">U$D 900</div>
    )
}

//iphone-53
if(secid==='iphone-13' && almacenamiento==='512GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='starlight'){
    return(
        <div className="precio-final">U$D 1070</div>
    )
}


//iphone-54
if(secid==='iphone-13-pro' && almacenamiento==='128GB' && ram==='-' && componente==='A15 Bionic(CPU de 6 núcleos / GPU de 5 núcleos)' && color==='green'){
    return(
        <div className="precio-final">U$D 1170</div>
    )
}

//ipad
if(secid==='ipad-mini-6ta' && almacenamiento==='64GB' && ram==='-' && componente==="Chip A15 Bionic (CPU de 6 núcleos / GPU  de 5 núcleos)" && (color==='purple' || color ==='starlight')){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}
if(secid==='ipad-mini-6ta' && almacenamiento==='256GB' && ram==='-' && componente==="Chip A15 Bionic (CPU de 6 núcleos / GPU  de 5 núcleos)" && color==='space'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if( almacenamiento==='-' && ram==='-' && componente==="-" && (color==='space' || color==='purple' || color ==='starlight' || color==='white' || color==='black' || color==='green' || color ==='blue' || color==='pink' || color==='black' || color==='silver')){
    return(
    <div className="precio-final">U$D {precio}</div>    )
}
//airpods
if(secid==='airpods-2'){
    return(
        <div className="precio-final">U$D 155</div>
    )
}

if(secid==='airpods-3'){
    return(
        <div className="precio-final">U$D 185</div>
    )
}
if(secid==='airpods-pro'){
    return(
        <div className="precio-final">U$D 210</div>
    )
}
if(secid==='airpods-pro-2'){
    return(
        <div className="precio-final">U$D 260</div>
    )
}

//ipads 

if(secid==='ipad-5ta' && almacenamiento==='64GB'){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}


if(secid==='ipad-10ma' && almacenamiento==='64GB' &&color==="silver"){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if(secid==='ipad-10ma' && almacenamiento==='64GB' &&color==="blue"){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if(secid==='ipad-10ma' && almacenamiento==='256GB' &&color==="silver"){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if(secid==='ipad-pro-11-m1' && almacenamiento==='256GB' && componente==="Chip A13 Bionic" && color==="space"){
    return(
        <Link to='/Cotizar' className="cotizar">
            <div>Producto disponible para cotizar</div>
        </Link>
    )
}

if(secid==='ipad-pro-11-m2' && almacenamiento==='128GB' && color==="space"){
    return(
        <div className="precio-final">U$D 960</div>
    )
}

if(secid==='ipad-pro-11-m2' && almacenamiento==='128GB' && color==="silver"){
    return(
        <div className="precio-final">U$D 960</div>
    )
}



if(secid==='ipad-pro-12.9' && almacenamiento==='128GB' && color==="silver"){
    return(
        <div className="precio-final">c/CELL: U$D 1550</div>
    )
}
if(secid==='ipad-pro-12.9' && almacenamiento==='128GB' && color==="space"){
    return(
        <div className="precio-final">c/CELL: U$D 1550</div>
    )
}

if(secid==='ipad-pro-12.9' && almacenamiento==='256GB' && color==="silver"){
    return(
        <div className="precio-final">c/CELL: U$D 1650</div>
    )
}
if(secid==='ipad-pro-12.9' && almacenamiento==='256GB' && color==="space"){
    return(
        <div className="precio-final">c/CELL: U$D 1650</div>
    )
}

if(secid==='ipad-pro-12.9' && almacenamiento==='512GB' && color==="silver"){
    return(
        <div className="precio-final">c/CELL: U$D 1900</div>
    )
}
if(secid==='ipad-pro-12.9' && almacenamiento==='512GB' && color==="space"){
    return(
        <div className="precio-final">c/CELL: U$D 1900</div>
    )
}









//ACCESORIOS
if(secid==='mg-mouse-2'){
    return(
        <div className="precio-final">U$D 130</div>
    )
}

if(secid==='ap-homepod-mini'){
    return(
        <div className="precio-final">U$D 165</div>
    )
}

if(secid==='airtag-x4'){
    return(
        <div className="precio-final">U$D 130</div>
    )
}


if(secid==='ap-pencil-2'){
    return(
        <div className="precio-final">U$D 160</div>
    )
}

if(secid==='mg-key-11'){
    return(
        <div className="precio-final">U$D 400</div>
    )
}

if(secid==='mg-key-12'){
    return(
        <div className="precio-final">U$D 410</div>
    )
}



if(secid==='sm-key-ipadpro 12'){
    return(
        <div className="precio-final">U$D 310</div>
    )
}

if(secid==='sm-key-11'){
    return(
        <div className="precio-final">U$D 300</div>
    )
}

//IMACS

if(secid==='imac-24-m1' && almacenamiento==='256GB' && ram==='8GB unificada'  && componente==="Apple M1 CPU de 7 núcleos" && color==='pink'){
    return(
        <div>U$D 1590</div>
    )
}

if(secid==='imac-24-m1' && almacenamiento==='256GB' && ram==='8GB unificada'  && componente==="Apple M1 CPU de 8 núcleos" && color==='pink'){
    return(
        <div>U$D 1720</div>
    )
}
if(secid==='imac-24-m1' && almacenamiento==='256GB' && ram==='8GB unificada'  && componente==="Apple M1 CPU de 8 núcleos" && color==='green'){
    return(
        <div>U$D 1720</div>
    )
}




// m2 pro 14

if(secid==='mb-m2-pro-14' && almacenamiento==='512GB' && ram==='16GB'  && componente==="CPU 10GB/16GB GPU" && color==='space'){
    return(
        <div>U$D 2460</div>
    )
}
if(secid==='mb-m2-pro-14' && almacenamiento==='512GB' && ram==='16GB'  && componente==="CPU 10GB/16GB GPU" && color==='silver'){
    return(
        
        <div>U$D 2460 / U$D 2490 V.Español</div>
    )
}

if(secid==='mb-m2-pro-14' && almacenamiento==='1TB' && ram==='16GB'  && componente==="CPU 12GB/19GB GPU" && color==='space'){
    return(
        <div>U$D 3090 Version Español</div>
    )
}
if(secid==='mb-m2-pro-14' && almacenamiento==='1TB' && ram==='16GB'  && componente==="CPU 12GB/19GB GPU" && color==='silver'){
    return(
        <div>U$D 3060</div>
    )
}

//m2 pro 16 2023
if(secid==='mb-m2-pro-16' && almacenamiento==='512GB' && ram==='16GB'  && componente==="CPU 12GB/19GB GPU" && color==='space'){
    return(
        <div>U$D 2990</div>
    )
}

if(secid==='mb-m2-pro-16' && almacenamiento==='1TB' && ram==='16GB'  && componente==="CPU 12GB/19GB GPU" && color==='space'){
    return(
        <div>U$D 3370 / U$D 3390 V.Español</div>
    )
}

if(secid==='mb-m2-pro-16' && almacenamiento==='1TB' && ram==='16GB'  && componente==="CPU 12GB/19GB GPU" && color==='silver'){
    return(
        <div>U$D 3370</div>
    )
}

}    
export default PrecioFinal