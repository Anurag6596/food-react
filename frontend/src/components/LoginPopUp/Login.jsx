// import React from 'react'
import { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/storeContext'
import axios from 'axios'

const Login = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currentState,setCurrentState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data, [name]: value}))
    }

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (currentState==="Login") {
            newUrl += "/api/user.login"
        }
        else{
            newUrl += "/api/user/register"
        }


        const response = await axios.post(newUrl,data); //this API is  for both login an register
        
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    };

  return (
    <div className='login'>
        <form onSubmit={onLogin} className="login-container">
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-input">
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Username' required/>}

                <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='e-mail' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
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