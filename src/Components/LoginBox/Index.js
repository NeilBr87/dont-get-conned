import './style.css'

export default function LoginBox() {

    return (
        <div id="loginBox">
            <input style={{marginBottom: '10px', marginTop: '20px'}} className="loginInput" type="ID" id="userID" name="User ID" placeholder="User ID"></input>
            <input className="loginInput" type="password" id="password" name="Password" placeholder="Password"></input>
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
    )
}