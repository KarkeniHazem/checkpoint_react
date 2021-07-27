import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar, Nav, NavDropdown, Form, FormControl, Button,CardGroup,Card,Spinner} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>

      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">GoMyCode Tournament</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Intructors</Nav.Link>
      <NavDropdown title="Students" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">KING HAZEM</NavDropdown.Item>
        <NavDropdown.Item href="#action4">MOUADH</NavDropdown.Item>
        <NavDropdown.Item href="#action5">HADIL</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<CardGroup>
  <Card>
    <Card.Img className="imgs" variant="top" src="/hazem.jpg" />
    <Card.Body>
      <Card.Title>KING HAZEM</Card.Title>
      <Card.Text>
        Hazem is an excellent student, He is he best at GoMyCode.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> Level : &#9733;&#9733;&#9733;&#9733;&#9733; </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgs" variant="top" src="/mouadh.png" />
    
    <Card.Body>
      <Card.Title>TAZZA HOK</Card.Title>
      <Card.Text>
        Mouadh is a very good student but his level is below Hazem because Hazem is simply the best.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Level : &#9733;&#9733;&#9733;&#9733; </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgs" variant="top" src="hadil.png" />
    <Card.Body>
      <Card.Title>Hodhod</Card.Title>
      <Card.Text>
        Hadil is a very lazy student, You dont want to work with her because she will just pull you back.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Level : &#9733; </small>
    </Card.Footer>
  </Card>
</CardGroup>
</Container>


<>
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
</>






























    </div>
  );
}



export default App;
