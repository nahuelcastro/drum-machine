import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormCheck from "react-bootstrap/FormCheck";

export default function DrumControlTable() {
    return(
        <Container style={styles.container}>
            <Row>
                <h1 style={styles.title}>Power</h1>
            </Row>
            <Row>
                <FormCheck type="switch" id="power" style={styles.switch}/>
            </Row>
            <Row>
                <h1>Display</h1>
            </Row>
            <Row>
                <h1 style={styles.title}>Volume</h1>
            </Row>
            <Row>
                <h1 style={styles.title}>Bank</h1>
            </Row>
            <Row>
                <FormCheck type="switch" id="bank" style={styles.switch}/>
            </Row>
        </Container>
    )
}

const styles = {
    container: {
        backgroundColor: "#f01050",
        color: "white",
        borderRadius: "20px",
        height: "35vh",
    },
    switch: {
        color: "white",
        justifyContent: "center",
        display: "flex",
    },
    title: {
        textAlign: "center",
        color: "white",
    }


}