import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        {/* <Link  to='/home'>Home</Link> */}
          <Navbar.Brand href="/">Time Schemer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/to-do">To Do</Nav.Link>
            <Nav.Link href="/task-completed">Completed Tasks</Nav.Link>
            <Nav.Link href="/calendar">Calender</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default Navigation;