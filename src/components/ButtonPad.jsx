import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function DrumPad({kkey}) {
    return(
        <Container>
            <Button variant="dark" style={styles.btn} className={"drum-pad"}>
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