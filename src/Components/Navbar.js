import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Files/Login/Flash.png';
import '../CSSFiles/Components/NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='flashlogo' className='logo' />
                </Navbar.Brand>
                
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;