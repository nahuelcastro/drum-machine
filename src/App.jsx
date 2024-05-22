import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import DrumMachine from "./components/DrumMachine";

// https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine

function App() {
  return (
    <Router basename="/drum-machine">
            <Container fluid="md">
                <Row>
                  <DrumMachine/>
                </Row>
            </Container>
    </Router>
  );
}

export default App;
