import { useState } from "react";
import "./App.css";
import PulseBox from "./Components/PulseBox";

const wait = (millis: number) => new Promise(res => setTimeout(res.bind(null), millis));

function App() {
    const [ toggleBrand, setToggleBrand ] = useState<boolean>(false);
    const [ hackathonYear, setHackathonYear ] = useState<string>("");
    const PULSE_BOXES = [];

    for (let i = 0;i < 10;i++) {
        PULSE_BOXES.push(<PulseBox delay={i / 10} key={i}/>);
    }

    setTimeout(async function() {
        if (!toggleBrand) {
            setToggleBrand(true);
            
            await wait(2600);
            setHackathonYear("|");
            await wait(600);
            setHackathonYear("2|");
            await wait(200);
            setHackathonYear("20|");
            await wait(400);
            setHackathonYear("202|");
            await wait(600);
            setHackathonYear("2024|");
            await wait(1000);
            setHackathonYear("2024");
        }
    }, 2500);

    return <>
        <header>
            <div id="brand" className={toggleBrand ? "brand-scale-in" : ""}>
                <span style={{ display: "block" }}>
                    { toggleBrand ? "RootHacks" : "" }
                </span>
                <br/>
                <span style={{ textAlign: "center", display: "block" }}>
                    { hackathonYear }
                </span>
            </div>

            <div id="pulse-container">
                {PULSE_BOXES}
            </div>
        </header>

        <section id="content-body" className={toggleBrand ? "body-descend-in" : ""}>
            <p>See us at &lt;venue location&gt; from Oct 3 to 6!</p>
            <p>Sponsored by: googel, microsweft, mrman, and dooberman</p>
            <p>blah</p>
            <p>blah</p>
            <p>(need better font)</p>
        </section>
    </>;
}

export default App;
