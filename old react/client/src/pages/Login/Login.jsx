import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import "./Login.css"


const Login = () => {


  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const login = async (e) => {

    e.preventDefault();
    let loginobj = {
      username,
      password,
    }
    let env = process.env.BACKEND_URL;
    // console.log(env)

    axios.post(`http://localhost:4600/api/user/login`, loginobj)
      .then((res) => {
        // console.log(res)
        if (res.status == 200) {
          localStorage.setItem("access_token", res.data.token)
          localStorage.setItem("refresh_token", res.data.refreshToken)
          localStorage.setItem("user_id", res.data.userid)
          setError(res.data.message)
        }
      }).catch((err) => {
        console.log(err.response.data)
        setError(error.response.data.message)
      })
    setUsername("");
    setPassword("");
  }





  return (
    <>
      <div className="login-body">


        <div className="main">
          <label htmlFor="chk" className="Login_text" aria-hidden="true">User Login</label>

          <div className="login">
            <div className="overlay">
              <form onSubmit={login}>
                <label htmlFor="chk" aria-hidden="true"></label><br /><br />
                <input
                  type="Usernmae"
                  name="Usernmae"
                  placeholder="Usernmae"
                  required=""
                  onChange={(e) => { setUsername(e.target.value) }}
                  value={username}
                />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                />
                <button className="login-button">Submit</button>
              </form>
            </div>
            <NavLink className='forget_password' to="/forgetpassword">forgetpassword</NavLink>
          </div>
        </div>
        <p className="errorPara">
          {error}
        </p>
      </div>
    </>
  )
}

export default Login