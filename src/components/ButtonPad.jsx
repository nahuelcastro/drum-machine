import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import audioMap from "../utils/audio";

export default function DrumPad({kkey}) {

    const handleBtnClick = () => {
        let audio = document.getElementById(kkey);
        audio.play();
    }

    return(
        <Container>
            <Button id={"btn-" + kkey} variant="dark" className={"drum-pad"} style={styles.btn} onClick={ handleBtnClick }>
                <audio id={kkey} src={audioMap[kkey].src} className={"clip"}></audio>
                {kkey}
            </Button>
        </Container>
    )
}

const styles = {


    btn: {
        width: "10vh",
        height: "10vh",
        borderRadius: "8px",
        color: "white",
        // backgroundColor: "#070F2B",
        fontSize: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "3px",
        marginTop: "10px",
        boxShadow: "0 0 10px #000",
    }
}