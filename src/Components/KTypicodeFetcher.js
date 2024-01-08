import React, { useEffect, useState } from 'react'

const KTypicodeFetcher = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((resp) => resp.json())
            .then((json) => setUserData(() => json))
    }, [])

    return (
        <>
            <div>ID: {userData.id}</div>
            <div>Name: {userData.name}</div>
            <div>Username: {userData.username}</div>
            <div>Email: {userData.email}</div>
        </>
    )
}

export default KTypicodeFetcher;