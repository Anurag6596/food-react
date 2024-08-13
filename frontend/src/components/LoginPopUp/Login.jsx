// import React from 'react'
import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { setToken, url } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [show, setshow] = useState(false);
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const onChangeHandler = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setData((data) => ({ ...data, [name]: value }));
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onLogin = async (e) => {
  //   e.preventDefault();

  //   const apiUrl = "https://localhost:4000/api/user/register";
  //   // url +
  //   // (currentState === "Login" ? "/api/user/login" : "/api/user/register");

  //   try {
  //     const response = await axios.post(apiUrl, {name,email,password}, {
  //       withCredentials: true,
  //     });
  //     if (response) {
  //       const token = response.data.token;
  //       setToken(token);
  //       localStorage.setItem("token", token);
  //       setshow(false);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     if (error.message) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       toast.error(error.message);

  //     console.error("Error:", error); // Log the error for debugging
  //   }
  // };

  const onLogin = async (e) => {
    e.preventDefault()

    let new_url = url;
    if (currentState === "Login") {
        new_url += "/api/user/login";
    }
    else {
        new_url += "/api/user/register"
    }
    const response = await axios.post(new_url,{name,email,password});
    if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        // loadCartData({token:response.data.token})
        setshow(false)
    }
    else {
        toast.error(response.data.message)
    }
}


  return (
    <div className="login">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setshow(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
              type="text"
              placeholder="Username"
              required
            />
          )}

          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="e-mail"
            required
          />
          <input
            name="password"
            // onChange={onChangeHandler}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>
            By continuing this, i agree to the terms of use & privacy policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

