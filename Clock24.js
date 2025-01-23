import React, { useState, useEffect } from "react";

const Clock24 = () => {
    let timeVar = new Date();
    const [time, setTime] = useState(timeVar);
    const [is24Hrs, setIs24Hrs] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            let timeVar = new Date();
            if (is24Hrs) {
                let Hrs = timeVar.getHours();
                let Min = timeVar.getMinutes();
                let Secs = timeVar.getSeconds();
                let finalTime = Hrs + ":" + Min + ":" + Secs;

                setTime(finalTime);
            }
            else
            {
                setTime(new Date().toLocaleTimeString());
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>
        <div>{finalTime}</div>
        <button onClick={()=>
            {
                setIs24Hrs(!is24Hrs);
            }
        }>Switch</button>
    </div>;
};

export default Clock24;
