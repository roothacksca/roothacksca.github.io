import "./Pulser.css"

type PulseBoxProps = { delay: number };
export default function({ delay }: PulseBoxProps) {
    return <div className="pulser" style={{ animationDelay: delay + "s" }}></div>;
}