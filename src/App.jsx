import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import DrumMachine from "./components/DrumMachine";

function App() {
  return (
    <>
            <Container fluid="md">
                <Row>
                  <DrumMachine/>
                </Row>
            </Container>
        </>
  );
}

export default App;
