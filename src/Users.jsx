import { useState } from "react"
//hook
function User(props) {
    //Normal Variable
    let name = "Ann"

    //State Variable
    let [email, setEmail] = useState(props.email)

    function changeEmail() {
        setEmail("newemail@gmail.com")
        console.log("Email changed to: ", email)
    }

    //parametersied function
    function displayData(a) {
        console.log("Which Data changed? " + a)
    }

    return (
        <>
            <div className="user">
                <h1>User Information</h1>
                <h2>{name}</h2>
                <h2>{email}</h2>
                {/* onClick is a reserved keyword in JS so we will call the function this way */}
                <button onClick={changeEmail}>Change Email</button>
                <button onClick={displayData.bind(this, "Email changed")}>Display</button>
                {/* <button onClick={() => {
                    displayData("Email changed")
                }
                }>Display</button> */}
            </div >
        </>
    )
}

export default User