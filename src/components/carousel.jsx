import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import gamingWeb from './estaticas/media/gaming-web.jpg'
import macbook from './estaticas/media/macbook-web.jpg'

function CarouselFade({banner1,banner2,banner3,banner4}) {

  if((banner1!="") && (banner2==="") && (banner3==="") && (banner4==="")){
    return(
      <Carousel fade>
      <Carousel.Item interval={2000}>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={banner1}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    )
  }
  
  else if((banner1!="") && (banner2!="") && (banner3==="") && (banner4==="")){
    return(
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <Link to="/gaming">
          <img
            className="d-block w-100"
            src={banner1}
            alt="Seccion productos Gaming"
          />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={banner2}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    )}

  else if((banner1!="") && (banner2!="") && (banner3!="") && (banner4==="")){
    return(
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <Link to="/gaming">
          <img
            className="d-block w-100"
            src={banner1}
            alt="Seccion productos Gaming"
          />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={banner2}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={banner3}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    )}



else if((banner1!="") && (banner2!="") && (banner3!="") && (banner4!="")){
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={banner1}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/filt/macbook"><img
          className="d-block w-100"
          src={banner2}
          alt="Seccion productos Macbook"/>
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/filt/macbook"><img
          className="d-block w-100"
          src={banner3}
          alt="Seccion productos Macbook"/>
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <Link to="/filt/macbook"><img
          className="d-block w-100"
          src={banner4}
          alt="Seccion productos Macbook"/>
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
}

export default CarouselFade;