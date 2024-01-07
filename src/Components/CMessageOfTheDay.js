import React from 'react'

const CMessageOfTheDay = (props) => {
    return (
        <>
            <div>{props.message}</div>
            {/* bonus: 
            <div>{props.message2}</div> 
            parent tag (in this case: <></>) required for bonus
            */}
        </>

    )
}

export default CMessageOfTheDay