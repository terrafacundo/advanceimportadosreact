import Carousel from 'react-bootstrap/Carousel';
import gamingWeb from './estaticas/media/gaming-web.jpg'
import macbook from './estaticas/media/macbook.jpg'
import { Link } from 'react-router-dom';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link to="/gaming">
        <img
          className="d-block w-100"
          src={gamingWeb}
          alt="Seccion productos Gaming"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <Link to="/filt/macbook"><img
          className="d-block w-100"
          src={macbook}
          alt="Seccion productos Macbook"
        />
        </Link>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;