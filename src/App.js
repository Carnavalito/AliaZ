import React from 'react'
import Container from 'react-bootstrap/Container';
import Input from './Components/Input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NaviBar from './Components/NaviBar';
import Historys from './Components/Historys';
import Help from './Components/Help';
import PubButton from './Components/PubButton'
function App() {
  return (
    <Container >
    <Row >
    <NaviBar/>
    </Row>
    <Row>
    <Col><Input/><PubButton/></Col>
    <Col><Historys/></Col>
    <Col><Help/></Col>

    </Row>
    </Container>
  );
}

export default App;
