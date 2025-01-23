import React, { useState } from "react"

const Counter =() =>
{
    const [num, setNum]= useState(0);

    const increment =()=>
    {
        if(num>9)
            {
                setNum('Limit Reached !')
            }
            else
            {
                setNum(num+1)
            }
    };
    const decrement =()=>
    {
        if(num<1)
        {
            setNum('Limit Reached !')
        }
        else
        {
            setNum(num-1)
        }
    };
    const mult =()=>
    {
        setNum(num*2)
    };

    return (

        <div class="num">
            <button onClick={increment} style={{padding:10, fontSize:30, margin:20}}>+</button>
            <div>{num}</div>
            <button onClick={decrement} style={{padding:10, fontSize:30, margin:20}}>-</button><br/>
            <button onClick={mult} style={{padding:10, fontSize:30, margin:20}}>x</button>
        </div>
    );
};

export default Counter;