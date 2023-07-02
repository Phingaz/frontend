import { useEffect, useState } from "react";

export default function Time() {

    const [time, setTime] = useState()
    
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, [])
    const date = new Date().toDateString()

    return (
        <div className="container flex">
            <div className="links">
                <p style={{minWidth: 50 }}>{date} {time}</p>
            </div>
        </div>
    );
};