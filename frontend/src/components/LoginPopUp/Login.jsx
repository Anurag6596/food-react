// import React from 'react'
import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login")
  return (
    <div className='login'>
        <form  className="login-container">
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-input">
                {currentState==="Login"?<></>:<input type='text' placeholder='Username' required/>}

                <input type="text" placeholder='e-mail' required />
                <input type="password" placeholder="Password" required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type="checknox" required />
                <p>By continuing this, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
            }
        </form>
    </div>
    
  )
}

export default Login