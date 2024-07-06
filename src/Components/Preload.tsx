import Brand from "./Brand";
import Ripple from "./Ripple";

import "./Preload.css";
import { useState } from "react";

type PreloadComponentProps = {
    enabled: boolean;
    rippleInterval: number;
};

export default function({ enabled, rippleInterval }: PreloadComponentProps) {
    const [ rippleEnable, setRippleEnable ] = useState(true);
    const [ width, height ] = [ 200, 200 ];

    if (!enabled) {
        setTimeout(() => setRippleEnable(false), 1000);
    }

    return <div style={{
        inset: 0,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 1s",
        animationDuration: rippleInterval.toString() + "s",
        opacity: enabled ? 1 : 0,
        pointerEvents: enabled ? "all" : "none"
    }}>
        <Brand width={width} height={height}/>

        { rippleEnable ? <Ripple width={width} height={height} borderRadius={10} color="#000" rippleInterval={rippleInterval}/> : null }
    </div>;
}