import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ButtonPad from "./ButtonPad";
import Col from "react-bootstrap/Col";

export default function DrumPad({setDisplay, volume, power}) {
    return(
        <Container style={styles.drumpad_container}>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"Q"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"W"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"E"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"A"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"S"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"D"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"Z"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"X"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"C"} setDisplay={setDisplay} volume={volume} power={power}/>
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    drumpad_container: {
        marginLeft: "-20px",
    }
}