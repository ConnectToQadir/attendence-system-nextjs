"use client"
import React, { useState } from "react";
// import { signIn } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
// import "./Login.css"

const Register = () => {
  const [error, setError] = useState("");
  const [full_name, setfull_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isadmin, setIsadmin] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    let loginobj = {
      full_name,
      username,
      password,
      email,
      isadmin,
    };
    // let env = process.env.BACKEND_URL;
    // console.log(env);
    console.log(loginobj);
    axios.post(`/api/register`, loginobj)
      .then((res) => {
        console.log(res)
        if (res.status == 201) {
          // localStorage.setItem("access_token", res.data.token)
          // localStorage.setItem("refresh_token", res.data.refreshToken)
          // localStorage.setItem("user_id", res.data.userid)
          setError("user has been sucsesfully created")
          
    setUsername("");
    setPassword("");
    setEmail("")
    setfull_name("")
    setIsadmin(false);
        }
      }).catch((error) => {
        console.log(error.response.data)
        setError(error.response.data)
      })
  
    // setUsername("");
    // setPassword("");
  };

  return (
    <>
      <div className="login-body">
    
        <div className="main">
          <label htmlFor="chk" className="Login_text" aria-hidden="true">
            Registration
          </label>
          <div className="login">
            <div className="overlay">
           
              <form onSubmit={login}>
                <label htmlFor="chk" aria-hidden="true"></label>
                <br />
              
                <br />{
                  error.success == false ? 
                  <p style={{background: "white" , color:  "red"  }} className="errorPara">{error.message}</p>
                  :
                  <p style={{background: "white" , color:  "green"}} className="errorPara">{error}</p>
                }
                
                <input
                  type="text"
                  name="full_name"
                  placeholder="full_name"
                  required
                  onChange={(e) => {
                    setfull_name(e.target.value);
                  }}
                  value={full_name}
                />
                <input
                  type="Usernmae"
                  name="Usernmae"
                  placeholder="Usernmae"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <label className="CHECKBOX">
                  Is Admin
                  <input
                    type="checkbox"
                    name="isadmin"
                    // required
                    onChange={(e) => {
                      setIsadmin(!isadmin);
                    }}
                    value={isadmin}
                  />
                </label>

                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />

                <button className="login-button">Submit</button>
              </form>
            </div>
            <Link className="forget_password" href="/forgetpassword">
              forgetpassword
            </Link>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Register;
