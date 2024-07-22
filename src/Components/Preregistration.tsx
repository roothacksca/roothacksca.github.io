import { MDBBtn, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";

import "./Preregistration.css";

export default function() {
    return <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    }}>
        <p style={{
            textAlign: "center",
            fontSize: "4em",
            fontFamily: "Josefin Sans"
        }}>Pre-registration!</p>

        <MDBInput type="text" label="Name"/>
        <MDBInput type="email" label="Email"/>
        <MDBCheckbox size={30} label="Keep me updated on the Roothacks newsletter!"/>
        <MDBBtn>Register</MDBBtn>
    </section>;
}