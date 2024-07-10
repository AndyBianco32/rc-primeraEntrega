import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget"

export const NavBar = () => (
<>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Dorian Gray</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dorian</Nav.Link>
            <Nav.Link href="#features">Harry</Nav.Link>
            <Nav.Link href="#pricing">Hallward</Nav.Link>
          </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
{/* <h2>Dorian Gray Shop</h2>
<ul>
    <li><a href="#">Dorian</a></li>
    <li><a href="#">Harry</a></li>
    <li><a href="#">Hallward</a></li>
</ul> */}
</>
)