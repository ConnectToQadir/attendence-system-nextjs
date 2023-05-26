import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Forgetpassword = () => {
    
  const [password, setPassword] = useState('')
  const [Tokken, setTokken] = useState('');

  const [Done, setDone] = useState(false);

  useEffect(() => {
    const url= window.location.pathname.split("/").pop();
   console.log(url)
   setTokken(url)
  },[])


  const resetpassword = async (e) => {
    e.preventDefault();
    let obj = {
        newpassword:password,
        resettokken:Tokken
    }
    axios.post(`http://localhost:4600/api/forgetpassword/reset-password`, obj)
      .then((res) => {
        console.log(res.data)
        setDone(true)
      }).catch((err) => {
        console.log(err.response.data)
      })
      setPassword("");
    
  }



  return (
    <>
    <div className="login-body">


      <div className="main">
        <label htmlFor="chk" className="Login_text" aria-hidden="true">Reset Password</label>

        <div className="login">
          <div className="overlay">
            <form onSubmit={resetpassword}>
              <label htmlFor="chk" aria-hidden="true"></label><br /><br />
              <input
                type="email"
                name="email"
                placeholder="email"
                required=""
                onChange={(e) => { setPassword(e.target.value) }}
                value={password}
              />
           
              <button className="login-button">Submit</button>
            </form>
          </div>
         {Done? 'password has been reset': 'password reset failed'}
        </div>
      </div>
    </div>
  </>
  )
}

export default Forgetpassword