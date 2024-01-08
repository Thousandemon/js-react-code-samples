import React, { useEffect, useState } from 'react'

const JCatPic = () => {

    const [catPic, setCatPic] = useState("");

    useEffect(() => {
        newCatPic();
    }, [])

    function newCatPic() {
        fetch("https://api.thecatapi.com/v1/images/search/")
            .then(response => response.json())
            .then(json => setCatPic(() => {
                return json[0].url
            }));
    }
    return (
        <>
            <button onClick={newCatPic}>Random</button>
            <br />
            <img src={catPic}></img>
            
        </>
    )

}

export default JCatPic