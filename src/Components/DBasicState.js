import React, { useState } from 'react'

const DBasicState = () => {
    const [message, setMessage] = useState("Hello World");
    return (
        <>
            <div>{message}</div>
            <button onClick={() => setMessage(()=> "Goodbye World")}>Change Message</button>
        </>

    )
}

export default DBasicState