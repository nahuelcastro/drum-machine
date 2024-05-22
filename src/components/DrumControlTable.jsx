import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormCheck from "react-bootstrap/FormCheck";

export default function DrumControlTable({display, setDisplay, volume, setVolume, power, setPower}) {

    const handlePower = () => {
        setPower(!power);
        if (power){
            setDisplay("Power Off");
        } else {
            setDisplay("Power On");
        }
    }

    return(
        <Container style={styles.container}>
            <Row>
                <h3 style={styles.title}>Power</h3>
            </Row>
            <Row>
                <FormCheck type="switch" id="power" style={styles.switch} onChange={handlePower} checked={power}/>
            </Row>
            <Row>
                <h3 id={"display"} style={styles.display}>{display}</h3>
            </Row>
            <Row>
                <h3 style={styles.title}>Volume</h3>
            </Row>
            <Row>
                <input type="range" id="volume" name="volume" min="0" max="100" value={volume}
                       onChange={(e) => setVolume(e.target.value)} style={styles.volume}/>
            </Row>
        </Container>
    )
}

const styles = {
    container: {
        // backgroundColor: "#f01050",
        color: "white",
        borderRadius: "20px",
        padding: "66px",
        boxShadow: "0 0 15px #000",
    },
    switch: {
        color: "white",
        justifyContent: "center",
        display: "flex",
        margin: "0 auto",

    },
    volume: {
        width: "60%",
        margin: "0 auto",
    },
    title: {
        textAlign: "center",
        color: "white",
        fontFamily: "monospace",
        fontSize: "20px",
        width: "100%",
        margin: "0 auto",
    },
    display: {
        textAlign: "center",
        color: "black",
        backgroundColor: "grey",
        width: "90%",
        margin: "30px auto",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 0 15px #000",
        fontFamily: "monospace",
        fontSize: "20px",
    }


}