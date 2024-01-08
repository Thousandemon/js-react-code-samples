import React, { useEffect, useState } from 'react'

const HTwoMessagesPartTwo = (props) => {
    const [activeMessage, setActiveMessage] = useState(props.message1);

    function swapMessage() {
        if (activeMessage === props.message1 ) {
            setActiveMessage(() => props.message2)
        } else {
            setActiveMessage(() => props.message1)
        }
    }
//--------------------------------------------------------
    useEffect(()=> {
        console.log("Message Switched");
    }, [activeMessage])
//--------------------------------------------------------
    return (
        <>
            <div>{activeMessage}</div>
            <button onClick={swapMessage}>Switch Message</button>
        </>

    )
}

export default HTwoMessagesPartTwo

//note:this can be completed in the original file