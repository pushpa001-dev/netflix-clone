import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { signup,login } from "../../firebase";
import loading_spinner from "../../assets/netflix_spinner.gif"
const Login = () => {
  const [signstate, setSignstate] = useState("Sign In");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading ,setloading] = useState(false);

const user_auth = async (event) => {
  event.preventDefault();
  setloading(true);
  if (signstate === "Sign In") {
    await login(email,password);
  } else {
    await signup(name,email,password);
  }
  setloading(false);
}
  return (
    loading?<div className="loading_apinnner">
      <img src={loading_spinner} alt="" />
    </div>:
    <div className="Login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login_form">
        <h1>{signstate}</h1>
        <form>
          {signstate==="Sign Up"?
          <input type="text" placeholder="Your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>:<></>}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder="current-password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type="submit">{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate==="Sign In"?<p>New to Netflix?<span onClick={()=>{
            setSignstate("Sign Up")
          }}> Sign up now</span></p>
          :<p>Already have an account?<span onClick={()=>{
            setSignstate("Sign In")
          }}> Sign in</span></p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
