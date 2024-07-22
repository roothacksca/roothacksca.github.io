import { useState } from "react";

import Brand from "./Brand";
import PreloadRipple from "./PreloadRipple";

import "./Preload.css";

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

        { rippleEnable ? <PreloadRipple width={width} height={height} borderRadius={10} color="#000" rippleInterval={rippleInterval}/> : null }
    </div>;
}


type PostloadComponentProps = {
    pageLoaded: boolean;
    time: number;
    children: React.ReactNode;
};
export function Postload({ pageLoaded, children, time }: PostloadComponentProps) {
    return <div style={{
        transition: "opacity " + time.toString() + "s",
        opacity: pageLoaded ? 1 : 0,
        pointerEvents: pageLoaded ? "all" : "none"
    }}>{children}</div>;
}