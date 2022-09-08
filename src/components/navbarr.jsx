import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

const  NaveBar=(seccion)=> {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="sub_navbar">
        <Navbar.Brand><Link to="/"><img src='http://placekitten.com/60/60'></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-around">
            <Link to={`/${seccion.a}`}>{seccion.a}</Link>
            <Link to={`/${seccion.b}`}>{seccion.b}</Link>
            <Link to={`/${seccion.c}`}>{seccion.c}</Link>
            <Link to={`/${seccion.d}`}>{seccion.d}</Link>
            <Link to={`/${seccion.e}`}>{seccion.e}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaveBar;