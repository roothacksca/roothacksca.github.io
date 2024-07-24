import { MDBBtn, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import BRAND_TRANSPARENT from "../../assets/images/brand-transparent.png";

import "./Preregistration.css";

export default function() {
    return <section className="preregistration d-flex w-60 flex-column">
        <header className="d-flex align-items-center mb-3 responsive-form-header">
            <img style={{ transform: "scale(1.2)", width: 150, height: 150 }} src={BRAND_TRANSPARENT}/>
            <div className="flex-grow-1 text-center" style={{ color: "rgb(21, 34, 48)" }}>
                <span style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "1.5em" }}>Pre-registration open now!</span>
                <h1 className="big-font">RootHacks</h1>
            </div>
        </header>

        <div className="form-element">
            <MDBInput color="red" className="text-box" type="text" label="Name"/>
            <MDBInput className="text-box" type="email" label="Email"/>
            <MDBCheckbox size={30} label="Keep me updated on the Roothacks newsletter!"/>
            <MDBBtn>Register</MDBBtn>
        </div>

    </section>;
}