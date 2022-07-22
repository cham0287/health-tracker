import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Workout from './routers/Workout';
import Weight from './routers/Weight';
import Diet from './routers/Diet';
import Main from './routers/Main';

function App() {
  return (
    <div className='App'>
      <Navbar bg='success' variant='dark' className='mainNav'>
        <Container>
          <Navbar.Brand href='/'>운동도우미</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/workout'>운동기록</Nav.Link>
            <Nav.Link href='/diet'>식단기록</Nav.Link>
            <Nav.Link href='/weight'>체중기록</Nav.Link>
          </Nav>
        </Container>
        <Container style={{ width: '15%' }}>
          <Nav>마이페이지</Nav>
          <Nav>로그인</Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/workout' element={<Workout />}></Route>
        <Route path='/diet' element={<Diet />}></Route>
        <Route path='/weight' element={<Weight />}></Route>
      </Routes>
    </div>
  );
}

export default App;
