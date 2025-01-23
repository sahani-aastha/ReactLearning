import React, {useState} from "react";

const Pomodoro=()=>
    {
        const [mins, setMins] = useState(25);
        const [secs, setSecs] = useState(60);

        const timermins= setInterval(()=>
        {
            setSecs(secs-1);
            if (secs===0)
            {
                setMins(mins-1);
            }

        },1000);

        return (<div>
                    <div className="clock">
                        {String(timermins).padStart(2,'0')}
                    </div>
                </div>
        );
    }; 

export default Pomodoro;