
import React from "react";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import DrumPad from "./DrumPad";
import DrumControlTable from "./DrumControlTable";

export default function DrumMachine() {

    const [power, setPower] = useState(true);
    const [bank, setBank] = useState(true);
    const [volume, setVolume] = useState(50);

    return (
        <Container id={"drum-machine"} style={styles.container}>
            <Row>
                <Col md={7}>
                    <DrumPad />
                </Col>
                <Col md={5}>
                    <DrumControlTable />
                </Col>
            </Row>
        </Container>
    );
}

const styles = {
    container: {
        backgroundColor: "#1B1A55",
        color: "white",
        marginTop: "30vh",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
    }
}
