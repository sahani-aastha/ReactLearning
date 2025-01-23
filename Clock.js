import React, {useState, useEffect} from "react"

const Clock=()=>
{
    
    let currtimeh=new Date().toLocaleTimeString(); //gives the current time
    let currtimem=new Date().toLocaleTimeString(); //gives the current time
    let currtimes=new Date().toLocaleTimeString(); //gives the current time
    
    const [timeh, setTimeh]= useState(currtimeh); //hook used to change any value
    const [timem, setTimem]= useState(currtimem); //hook used to change any value
    const [times, setTimes]= useState(currtimes); //hook used to change any value

    useEffect(()=>
    {
        const timerh = setInterval(() => {  //setting the interval for which the time/value will change

            setTimeh(new Date().getHours()); //changing the value

            
        }, 1000);

        return () =>
        {
            clearInterval(timerh) //returning the changed state
        };
    },[]);

    useEffect(()=>
    {
        const timerm = setInterval(() => {  //setting the interval for which the time/value will change

            setTimem(new Date().getMinutes()); //changing the value

        }, 1000);

        return () =>
        {
            clearInterval(timerm) //returning the changed state
        };
    },[]);

    useEffect(()=>
    {
        const timers = setInterval(() => {  //setting the interval for which the time/value will change

            setTimes(new Date().getSeconds()); //changing the value
            
        }, 1000);

        return () =>
        {
            clearInterval(timers) //returning the changed state
        };
    },[]);

    

    return (

        <div>
            <div className="clock">
                {String(timeh).padStart(2,'0')} : {String(timem).padStart(2,'0')} : {String(times).padStart(2,'0')}
            </div>
            <div className="timebuttons" 
            style=
            {{
                display:"flex",
                justifyContent:"space-around",
                flexDirection:"row",
                position: "relative",
                top:300

            }}>
                <button style={{padding:10}}>Switch</button>

                {/* <button>24Hr Format</button> */}
            </div>
        </div>
        
        
    );
};

export default Clock; 