import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

import Preload, { Postload } from "./Components/Preload/Preload";
import Preregistration from "./Components/Preregistration";

// TODO: implement react router for page loading

import "./App.css";

function App() {
    const [ pageLoaded, setPageLoaded ] = useState<boolean>(false);

    useEffect(() => {
        // load stuff

        setTimeout(() => setPageLoaded(true), 0 * 2500);

    });

    return <MDBContainer fluid>
        <Preload enabled={!pageLoaded} rippleInterval={1.5}/>

        <Postload pageLoaded={pageLoaded} time={0.5}>
            <Preregistration/>
        </Postload>
    </MDBContainer>;
}

export default App;
