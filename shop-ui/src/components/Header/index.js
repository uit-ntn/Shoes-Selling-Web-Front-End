import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Row className='flex-nowrap w-100'>
          <Col xxl={3}>
            <Navbar.Brand href="#" xxl = {3}>
              <Row>
                <Col>
                  <img src="" alt="" srcset=""/>
                </Col>
                <Col></Col>

              </Row>
            </Navbar.Brand>

          </Col>
          <Col xxl={9}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" xxxl={2}>Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Home;
