import { useState } from "react";
export default function EventHandling() {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        
        setMessage(event.target.value)
    }
return <>
    <h1>Evan handling</h1>
    <input type="text" onChange={handleChange} placeholder="Enter your name" />
    <p>{message}</p>
</>
}