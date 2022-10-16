import { React } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import './style.css';
import logo from '../../../assets/Untitled.webp';
import { Link } from 'react-router-dom';
import CardWidget from '../../cartWidget';



const NavbarMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="" className='navbar'>
            <Container>
                <Navbar.Brand href="/">
                    <Figure >
                        <Figure.Image
                            className='figure'
                            alt=""
                            src={logo}
                        />
                    </Figure>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className='link'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/category/tortas' className='link'>Tortas</Nav.Link>
                        <Nav.Link as={Link} to='/category/galletitas' className='link'>Galletitas</Nav.Link>
                        <Nav.Link as={Link} to='/category/alfajores' className='link'>Alfajores</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CardWidget />
            </Container>
        </Navbar>
    );
}

export default NavbarMenu