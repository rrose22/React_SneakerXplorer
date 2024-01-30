
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Image  from 'react-bootstrap/Image';




function ResellPage() {
  return (
    <div className="App">
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="/home" className="font-italic" >RESELLPAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/resell">Resell</Nav.Link>
            <Nav.Link href="">Sneakers</Nav.Link>
            <Nav.Link href="#link">Calendar</Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar expand="lg" bg="dark"></Navbar>

      <Container>
     <Row>
      <Col ><Image src='https://sneakerbardetroit.com/wp-content/uploads/2019/07/Air-Jordan-4-Black-Cat-CU1110-010-2020-Release-Date-2.png' fluid></Image></Col>
      <Col>
        <h1 style={{marginTop: '5rem', marginLeft: 0}}>SneakerXplorer</h1>
        <h5>Your one stop destination for sneaker deals and upcoming releases. </h5>
        <Button variant="danger" size="lg">Browse Sneakers</Button>
        </Col>
     </Row>
      </Container>
      <Container style={{ backgroundColor: 'black',padding: '4rem', color: 'whitesmoke',}}fluid>
          <h2 >What is SneakerXplorer?</h2>
          <h5>Sneaker Xplorer is a companion Web Application for those who enjoy
          sneakers. Whether you're a sneakerhead, an enthusiast, reseller, or 
          just looking for a new pair of shoes, we want to help! We offer an 
          application that gathers prices from many popular websites like Nike,
          Adidas, Goat, Stockx, End, and many more. Then, we find the best 
          prices and deals for you!</h5>
      </Container>
      <Container style={{ backgroundColor: 'white',padding: '5rem', color: 'black',}}fluid>
          <h2 >Why Use Us?</h2>
          <h5>    If you're in the market for sneakers, Sneaker Xplorer is your go-to platform for comparing prices 
across various retail sites, ensuring you find the best deals all in one place. 
Not only does Sneaker Xplorer help you secure great deals, 
but we've also crafted a release calendar to keep you informed about upcoming sneaker launches.
Make Sneaker Xplorer your trusted companion for discovering deals and 
staying in the loop on the latest sneaker releases.</h5>
      </Container>
  
    <Container>
    <Row>
      <Col><Card style={{ width: '15rem', backgroundColor: 'darkgrey'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sneaker One</Card.Title>
        <Card.Text>
          Sneakers are an amazing way of expression
        </Card.Text>
        <Button variant="primary">View Sneaker</Button>
      </Card.Body>
    </Card></Col>
    <Col><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{width:'200px', height: '200px', alignSelf: 'center'}} src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8975a7a6-c52b-4e4e-b2f7-76a660679b50/air-jordan-iv-black-cat-release-date.jpg" />
      <Card.Body>
        <Card.Title>Sneaker Two</Card.Title>
        <Card.Text>
        Sneakers are an amazing way of expression
        </Card.Text>
        <Button variant="primary">View Sneaker</Button>
      </Card.Body>
    </Card></Col>
    <Col><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sneaker Three</Card.Title>
        <Card.Text>
        Sneakers are an amazing way of expression
        </Card.Text>
        <Button variant="primary">View Sneaker</Button>
      </Card.Body>
    </Card></Col>
    <Col><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sneaker 4</Card.Title>
        <Card.Text>
        Sneakers are an amazing way of expression
        </Card.Text>
        <Button variant="primary">View Sneaker</Button>
      </Card.Body>
    </Card></Col>
    </Row>
    </Container>
    <Container style={{ backgroundColor: 'darkred',padding: '5rem', color: 'black',}}fluid>
     <Row>
      <Col>
          <h3>Social Media</h3>
          <Col><h7><a href='#'>SnapChat</a></h7></Col>
          <Col><h7><a href='#'>Instagram</a></h7></Col>
          <Col><h7><a href='#'>Twitter</a></h7></Col>
      </Col>
      <Col>
          <h3>Contact Us</h3>
          <Col><h7><a href='#'>sneakerxplorer@email.co</a></h7></Col>
          <Col><h7><a href='#'>647-123-4567</a></h7></Col>

      </Col>

     </Row>
      </Container>
  
    </div>
  );
}

export default ResellPage