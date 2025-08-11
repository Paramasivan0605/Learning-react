import { useState } from 'react';

export default function StateExpample() {

    const[state, setcount] = useState(0);
    console.log("Siva");
    const handleClick = () => {
        setcount(state + 1);
    }

    return <>
        <h1>State Example</h1>
        <h3>Counter {state}</h3>
        <button onClick={handleClick} className="bg-color">Increment</button>
    </>

}