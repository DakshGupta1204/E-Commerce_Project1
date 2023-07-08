
function SignUp() {
    const [toggle,setToggle] = React.useState(true);
    return (

        <div>
            <div className="container">
                <div className={`${toggle?"SignUp":"signup--change"}`}>
                    <div className="SignUp--image" >
                    </div>
                    <div className="SignUp--main">
                        <h2 className="main--heading">SIGN UP</h2>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Confirm-Password" />
                        <input type="submit" value="Sign Up" />
                        <a href="#" className="toggle--link" onClick={()=>setToggle(!toggle)}>
                            <p>Already have an account?</p>
                        </a>
                    </div>
                </div>
                <div className={`${toggle?"LogIn":"login--change"}`}>
                    
                    <div className="LogIn--main">
                        <h2 className="main--heading">LOG IN</h2>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Password" />
                        <input type="submit" value="Log In" />
                        <a href="#" className="toggle--link" onClick={()=>setToggle(!toggle)}>
                            <p>Don't have an account?</p>
                        </a>
                    </div>
                    <div className="LogIn--image"></div>
                </div>
            </div>
            <div className="emojis">
                <div className="emojis1">
                    <img src="https://img.icons8.com/?size=1x&id=GulpJMVoBxBn&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=s1tswuVlc5s2&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=mUpfRJ6XyPUS&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=nRQBhkxz07Hq&format=png" />
                </div>
                <div className="emojis2">
                    <img src="https://img.icons8.com/?size=1x&id=ndmF3gwG7SV2&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=6uRikaIQqwR6&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=WricNzKvXRnI&format=png" />
                    <img src="https://img.icons8.com/?size=1x&id=bfzB1emH0tgY&format=png" />
                </div>


            </div>
            
        </div>
    )
}

function LogInMain() {
    return (
        <SignUp />
    )
}


ReactDOM.render(
    <LogInMain />,
    document.getElementById('root2')
)