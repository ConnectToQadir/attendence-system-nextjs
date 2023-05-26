import React,{useState} from 'react'
import axios from 'axios'

const Forgetpassword = () => {
    
  const [email, setEmail] = useState('')

  const forgetpassword = async (e) => {

    e.preventDefault();
  
   let emailobj={
    email
   }
    console.log(email)

    axios.post(`http://localhost:4600/api/forgetpassword/forgot-password`, emailobj)
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err.response.data)
      })
    setEmail("");
    
  }



  return (
    <>
    <div className="login-body">


      <div className="main">
        <label htmlFor="chk" className="Login_text" aria-hidden="true">Forget Password</label>

        <div className="login">
          <div className="overlay">
            <form onSubmit={forgetpassword}>
              <label htmlFor="chk" aria-hidden="true"></label><br /><br />
              <input
                type="email"
                name="email"
                placeholder="email"
                required=""
                onChange={(e) => { setEmail(e.target.value) }}
                value={email}
              />
           
              <button className="login-button">Submit</button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  </>
  )
}

export default Forgetpassword