import './navbar.css'
import { useState } from 'react'

const Navbar = () => {

  const [profileDropDown,setProfileDropDown] = useState(false)

  return (
    <div className='navbar' >
      <div className="logo">
        <img src="images/logo.webp" alt="" />
      </div>

      <div className="profileAndOtherLinks">
        <div className="quickLinks">


          <div className="search">
            <input type="text" placeholder='Global Search' />
            <i className='bx bx-search-alt-2'></i>
          </div>

          <div data-num='5' className="eachItem tasks">
            <i className='bx bx-list-ul' ></i>
          </div>

          <div data-num='4' className="eachItem clock">
            <i className='bx bx-time' ></i>
          </div>

          <div data-num='6' className="eachItem notification">
            <i className='bx bx-bell' ></i>
          </div>


        </div>
        <div className="profile">
          <div className="imgDiv">
            <img src="images/user2.jpg" alt="" />
          </div>
          <div className="detail">
            <div className="username">Ghulam Qadir</div>
            <div className="role">Developer</div>
          </div>
          <div className="arrowDown">
            <i onClick={()=>setProfileDropDown(!profileDropDown)} style={{transform:`rotate(${profileDropDown ? "180deg" : "0deg"})`}} className='bx bx-chevron-down'></i>
          </div>

          {/* Profile Click DropDown */}
          <div className={`profileDropDown ${profileDropDown ? "active" : ""}`}>
            <div>Welcome Qadir!</div>
            <ul>
              <li>
                <a href="/">
                  <i className='bx bx-user'></i>
                  Profile
                </a>
              </li>
              <li>
                <a href="/">
                  <i className='bx bx-list-ul' ></i>
                  Task Board
                </a>
              </li>
              <li>
                <a href="/">
                  <i className='bx bx-cog'></i>
                  Setting
                </a>
              </li>
              <li>
                <a href="/">
                  <i className='bx bx-log-out' ></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar