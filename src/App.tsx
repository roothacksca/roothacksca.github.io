import { MDBContainer } from "mdb-react-ui-kit";

import Preregistration from "./Components/Preregistration/Preregistration";
import BACKGROUND from "../assets/images/background.png";

// TODO: implement react router for page loading

import "./App.css";

function App() {
    // const [ pageLoaded, setPageLoaded ] = useState<boolean>(false);

    // useEffect(() => {
    //     // load stuff

    //     setTimeout(() => setPageLoaded(true), 0 * 2500);

    // });

    return <MDBContainer className="full-background" fluid
        style={{
            backgroundImage: `url(${BACKGROUND})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            minHeight: "100vh",
            height: "fit-content"
        }}>
        {/* <Preload enabled={!pageLoaded} rippleInterval={1.5}/>

        <Postload pageLoaded={pageLoaded} time={0.5}>
        </Postload> */}

        <Preregistration/>
    </MDBContainer>;
}

export default App;
