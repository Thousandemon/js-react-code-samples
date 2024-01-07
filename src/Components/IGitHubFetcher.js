import React from 'react'

//I pulled in this old version of the github fetcher, I will be revising it as well as adding  1/8
const IGitHubFetcher = (props) => {
    const [login, setLogin] = useState("loading");
    const [id, setid] = useState("loading");
    const [name, setName] = useState("loading");
    const [email, setEmail] = useState("loading");

//note: you can hardcode the username rather than passing it in through props
    useEffect(()=> {
        fetch("https://api.github.com/users/" + props.testName)
            .then((resp)=> {
                console.log(resp);
                return resp.json()
            })
            .then((json) => {
                console.log(json);
                setLogin(()=> json.login);
                setid(()=> json.id);
                setName(()=> json.name);
                setEmail(()=> json.email);
            })
    },[props.testName])

    useEffect(() => {
        let emailArray = document.querySelectorAll(".textEmail");
        console.log(emailArray);
        for(let i = 0; i<emailArray.length; i++)  {
            if(emailArray[i].textContent === "Email: None")  {
                emailArray[i].style.color="red";
            }
        }
    }, [email])


    const noEmail = "None";
    return (
        <>
            <h2>Login:  {login}</h2>
            <h2>ID:  {id}</h2>
            <h2>Name:  {name}</h2>
            <h2 className = "textEmail">Email: {email ?? noEmail}</h2>
            <h2>------------------------------------------------------------</h2>
        </>
    )
}
export default IGitHubFetcher