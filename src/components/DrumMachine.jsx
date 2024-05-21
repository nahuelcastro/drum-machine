
import React, { useEffect, useRef } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import DrumPad from "./DrumPad";
import DrumControlTable from "./DrumControlTable";
import audioMap from "../utils/audio";

export default function DrumMachine() {

    const valid_keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const [power, setPower] = useState(true);
    const [bank, setBank] = useState(true);
    const [volume, setVolume] = useState(50); // 0-100

    const handleKeyPress = (e) => {
        if (power) {
            if (valid_keys.includes(e.key.toUpperCase())){
                document.getElementById("btn-" + e.key.toUpperCase()).click();
            }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    document.addEventListener("keydown", handleKeyPress);

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
