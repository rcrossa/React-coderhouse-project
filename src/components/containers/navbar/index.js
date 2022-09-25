import { React } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import './style.css';
import logo from '../../../assets/Untitled.webp';


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
                        <Nav.Link href="/" className='link'>Home</Nav.Link>
                        <Nav.Link href="product" className='link'>Product</Nav.Link>
                        <Nav.Link href="details" className='link'>Details</Nav.Link>
                        <Nav.Link href="contact" className='link'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu