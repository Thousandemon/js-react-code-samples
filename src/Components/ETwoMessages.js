import React, { useState } from 'react'

const ETwoMessages = (props) => {

    const [activeMessage, setActiveMessage] = useState(props.message1);

    function swapMessage() {
        if (activeMessage === props.message1 ) {
            setActiveMessage(() => props.message2)
        } else {
            setActiveMessage(() => props.message1)
        }
    }

    return (
        <>
            <div>{activeMessage}</div>
            <button onClick={swapMessage}>Switch Message</button>
        </>

    )
}

export default ETwoMessages