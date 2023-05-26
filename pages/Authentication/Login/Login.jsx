
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
// import "./Login.css"

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    // let loginobj = {
    //   username,
    //   password,
    // }
    // let env = process.env.BACKEND_URL;
    // console.log(env)

    // axios.post(`http://localhost:4600/api/user/login`, loginobj)
    //   .then((res) => {
    //     // console.log(res)
    //     if (res.status == 200) {
    //       localStorage.setItem("access_token", res.data.token)
    //       localStorage.setItem("refresh_token", res.data.refreshToken)
    //       localStorage.setItem("user_id", res.data.userid)
    //       setError(res.data.message)
    //     }
    //   }).catch((err) => {
    //     console.log(err.response.data)
    //     setError(error.response.data.message)
    //   })
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      setError("user has been sucsesfully Logged in")
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="main">
          <label htmlFor="chk" className="Login_text" aria-hidden="true">
            User Login
          </label>

          <div className="login">
            <div className="overlay">
              <form onSubmit={login}>
                <label htmlFor="chk" aria-hidden="true"></label>
                <br />
                <br />
                {
                  error.success == false ? 
                  <p style={{background: "white" , color:  "red"  }} className="errorPara">{error.message}</p>
                  :
                  <p style={{background: "white" , color:  "green"}} className="errorPara">{error}</p>
                }
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
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
        <p className="errorPara">{error}</p>
      </div>
    </>
  );
};

export default Login;
