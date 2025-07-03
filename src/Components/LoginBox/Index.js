import './style.css'

export default function LoginBox(props) {

    function anyInput() {
        props.setScammed(true)
    }

    return (
        <div>
        <div id="loginBox">
            <input onInput={anyInput} style={{marginBottom: '10px', marginTop: '20px'}} className="loginInput" type="ID" id="userID" name="User ID" placeholder="User ID"></input>
            <input onInput={anyInput}  className="loginInput" type="password" id="password" name="Password" placeholder="Password"></input>
            <div id="checkboxContainer">
                <input type="checkbox" id="userIDcheckbox"></input>
                <p>Save user ID</p>
            </div>
            <button id="logIn">Log in</button>
            <p style={{marginLeft: '4%', marginBottom: '-4px'}}>Forgot password</p>
            <p style={{marginLeft: '4%', marginBottom: '20px'}}>Security & Help</p>
            <div id="openAccount">
                <p>Open an account</p>
            </div>
        </div>

        <div id="atmBox">
            <p style={{paddingLeft: '4%'}}>Find your closest financial center or ATM</p>   
            <div id="appointBox">
                <p style={{paddingLeft: '4%'}}>Schedule an Appointment</p>
            </div>         
        </div>

        </div>
    )
}