import { useEffect, useState } from "react";

import "./Ripple.css";

type RippleComponentProps = {
    width: number;
    height: number;
    borderRadius: number;
    color: string;
};

function SubRipple({ color, width, height, borderRadius }: RippleComponentProps) {
    return <div style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: color,
        position: "absolute"
    }} className="ripple"></div>;
}

export default function Ripple({ color, width, height, borderRadius, rippleInterval }: RippleComponentProps & { rippleInterval: number }) {
    const [ ripplesArray, setRipplesArray ] = useState<Array<number>>([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRipplesArray(state => [...state, Date.now()]);
        }, rippleInterval * 1000);
        
        setRipplesArray([0]);

        return () => {
            setRipplesArray([]);
            clearInterval(interval);
        }
    }, []);

    return <>
        {ripplesArray.map(time => {
            return <SubRipple color={color} width={width} height={height} borderRadius={borderRadius} key={time}/>
        })}
    </>;
}