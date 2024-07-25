import { MDBBtn, MDBCheckbox, MDBInput, MDBValidation, MDBValidationItem } from "mdb-react-ui-kit";
import BRAND_TRANSPARENT from "../../../assets/images/brand-transparent.png";

import { FocusEventHandler, FormEventHandler } from "react";
import "./Preregistration.css";

function mdbInputEvFlagger(method: "add" | "remove"): FocusEventHandler {
    return (event) => {
        const formOutlineEl = event.target.parentElement;
        if (!(event.target as HTMLInputElement).value || method == "add") {
            formOutlineEl?.classList[method]("focused");
        }
    };
}

const DEV_SERVER = false;
const FORM_SERVER = DEV_SERVER ? "127.0.0.1:3000"
                                : "44.198.227.56";

const sendForm: FormEventHandler = (event) => {
    const form = event.target as HTMLFormElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const newsletter = document.getElementById("newsletter-agreement") as HTMLInputElement;
    const register = document.getElementById("register") as HTMLButtonElement;
    const preregContainer = document.getElementById("preregistration-container") as HTMLDivElement;
    const bigTitleController = document.getElementById("big-font-title-control") as HTMLDivElement;
    const bigTitleAltText = document.getElementById("post-register-text") as HTMLHeadingElement;

    register.disabled = true;

    if (form.checkValidity()) {
        const data = {
            name: name.value,
            email: email.value,
            newsletter: newsletter.checked
        };

        const handleResponse = (res: Response) => {
            console.log(res.status);

            switch (res.status) {
                case 200:
                case 409: {
                    form.classList.add("slide");

                    setTimeout(() => {
                        preregContainer.classList.add("registered");
                        bigTitleController.classList.remove("active-a");

                        if (res.status == 409) {
                            bigTitleAltText.textContent = "Oops, looks like you're already registered!"
                        }
                
                        setTimeout(() => {
                            bigTitleController.classList.add("active-b");
                        }, 1000);
                    }, 1200);
                    break;
                }
                case 400: {
                    break;
                }
            }
        }
    
        fetch(`http://${FORM_SERVER}/preregistration`, {
            "method": "POST",
            "body": JSON.stringify(data),
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(handleResponse).catch(handleResponse);
    } else {
        register.disabled = false;
    }
}

export default function() {
    return <section id="preregistration-container" className="preregistration m-auto w-100 d-flex w-60 flex-column text-center">
        <header className="d-flex align-items-center mb-3 responsive-form-header">
            <img style={{ transform: "scale(1.2)", width: 150, height: 150 }} src={BRAND_TRANSPARENT}/>
            <div className="flex-grow-1 text-center" style={{ width: "100%", color: "rgb(21, 34, 48)" }}>
                <span style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "1.5em" }}>Pre-registration open now!</span>
                <div id="big-font-title-control" className="active-a big-font-title">
                    <h1 className="a big-font">RootHacks 2024</h1>
                    <h1 id="post-register-text" className="b big-font">Thank you for pre-registering!</h1>
                </div>
            </div>
        </header>

        <MDBValidation className="slide-form form-element" onSubmit={sendForm}>
            <MDBValidationItem style={{ marginTop: "20px", height: "50px" }} invalid feedback="Please provide a name that does not exceed 50 characters.">
                <MDBInput
                    required
                    type="text"
                    id="name"
                    className="text-box"
                    label="Name"
                    autoComplete="off"
                    spellCheck={false}
                    maxLength={50}
                    onBlur={mdbInputEvFlagger("remove")}
                    onFocus={mdbInputEvFlagger("add")}
                />
            </MDBValidationItem>

            <MDBValidationItem style={{ height: "80px" }} invalid feedback="Please provide a valid email address that does not exceed 50 characters.">
                <MDBInput
                    required
                    type="email"
                    id="email"
                    className="text-box"
                    label="Email"
                    autoComplete="off"
                    spellCheck={false}
                    maxLength={50}
                    onBlur={mdbInputEvFlagger("remove")}
                    onFocus={mdbInputEvFlagger("add")}
                />
            </MDBValidationItem>

            <MDBCheckbox id="newsletter-agreement" size={30} label="Keep me updated on the Roothacks newsletter!"/>
            
            <MDBBtn id="register" type="submit">Register</MDBBtn>
        </MDBValidation>
    </section>;
}