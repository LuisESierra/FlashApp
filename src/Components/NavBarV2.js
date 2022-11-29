import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../Files/Login/Flash.png'
import search from '../Files/NavBar/search.png'

import '../CSSFiles/Components/NavBarV2.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import loc from '../Files/Location.png'
import shopc from '../Files/logos/shopcart.png'


const NavBarV2 = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt='flashlogo' className='logoV2' />
                        </Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="#dir" className='dir'><img src={loc} alt='loclogo' className='loclogo' />Carrera 100 #85-34</Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="¿Qué quieres pedir hoy?"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"> <img src={search} alt='searchlogo' className='search' /></Button>
                        </Form>

                        <Form className="cart">
                            <Button variant="outline-success"> <img src={shopc} alt='searchlogo' className='search' /></Button>
                        </Form>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}


export default NavBarV2;