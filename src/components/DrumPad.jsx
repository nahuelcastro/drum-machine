import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ButtonPad from "./ButtonPad";
import Col from "react-bootstrap/Col";

export default function DrumPad() {
    return(
        <Container style={styles.drumpad_container}>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"Q"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"W"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"E"}/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"A"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"S"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"D"}/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ButtonPad kkey={"Z"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"X"}/>
                </Col>
                <Col md={4}>
                    <ButtonPad kkey={"C"}/>
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    drumpad_container: {
        backgroundColor: "#f01050",
    }
}