
import { useEffect, useState } from "react";
import "./App.css";
import Preload from "./Components/Preload";

function App() {
    const [ pageLoaded, setPageLoaded ] = useState<boolean>(false);

    useEffect(() => {
        // load stuff

        setTimeout(() => setPageLoaded(true), 2500);

    });

    return <>
        <Preload enabled={!pageLoaded} rippleInterval={1.5}/>
    </>;
}

export default App;
