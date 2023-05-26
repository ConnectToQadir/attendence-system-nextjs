import { useState } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    var [sideBarClose, setSideBarClose] = useState(false)
    var [dMenu1, setDMenu1] = useState(false)
    var [dMenu2, setDMenu2] = useState(false)
    var [dMenu3, setDMenu3] = useState(false)
    var [dMenu4, setDMenu4] = useState(false)
    var [dMenu5, setDMenu5] = useState(false)
    var [dMenu6, setDMenu6] = useState(false)
    var [dMenu7, setDMenu7] = useState(false)


    return (
        <div className={`sidebar ${sideBarClose ? "" : "close"}`}>
            <div className="logo-details">
                <i onClick={() => setSideBarClose(!sideBarClose)} className='bx bx-menu' ></i>
                <span className="logo_name">Main Menu</span>
            </div>
            <ul className="nav-links">

                <li>
                    <NavLink to="/">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="link_name">Dashboard</span>
                    </NavLink>
                </li>

                {/* <li>
                    <NavLink to="/employees">
                        <i className='bx bx-group'></i>
                        <span className="link_name">Employees</span>
                    </NavLink>
                </li> */}

                {/* Dropdonw for Enquiris */}
                <li className={dMenu1 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-group'></i>
                            <span className="link_name">Employees</span>
                        </div>
                        <i onClick={() => setDMenu1(!dMenu1)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <NavLink to="/add-employees">Add Employee</NavLink>
                        <NavLink to="/employees-list">Employees List</NavLink>
                    </ul>
                </li>

                {/* Dropdonw for Students */}
                {/* <li className={dMenu2 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-user-check' ></i>
                            <span className="link_name">Students</span>
                        </div>
                        <i onClick={() => setDMenu2(!dMenu2)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Add Students</a></li>
                        <li><a href="/">View Students</a></li>
                        <li><a href="/">Import Direct Excel</a></li>
                        <li><a href="/">Import Custom Excel</a></li>
                    </ul>
                </li> */}


                {/* Dropdonw for Applications */}
                {/* <li className={dMenu3 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-file-find'></i>
                            <span className="link_name">Applications</span>
                        </div>
                        <i onClick={() => setDMenu3(!dMenu3)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Edify Applications</a></li>
                        <li><a href="/">Partner Applications</a></li>
                        <li><a href="/">All Applications</a></li>
                    </ul>
                </li> */}

                {/* <li>
                    <a href="/">
                        <i className='bx bx-paper-plane' ></i>
                        <span className="link_name">Visa</span>
                    </a>
                </li> */}

                {/* Dropdonw for Accounts */}
                {/* <li className={dMenu4 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-cart'></i>
                            <span className="link_name">Accounts</span>
                        </div>
                        <i onClick={() => setDMenu4(!dMenu4)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Accounts Sub Menu</a></li>
                        <li><a href="/">Accounts Sub Menu</a></li>
                        <li><a href="/">Accounts Sub Menu</a></li>
                        <li><a href="/">Accounts Sub Menu</a></li>
                        <li><a href="/">Accounts Sub Menu</a></li>
                        <li><a href="/">Accounts Sub Menu</a></li>
                    </ul>
                </li> */}


                {/* Dropdonw for Reports */}
                {/* <li className={dMenu5 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-spreadsheet'></i>
                            <span className="link_name">Reports</span>
                        </div>
                        <i onClick={() => setDMenu5(!dMenu5)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                    </ul>
                </li> */}


                {/* Dropdonw for Defer / Enrollment */}
                {/* <li className={dMenu6 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-user-voice' ></i>
                            <span className="link_name">Defer / Enrollment</span>
                        </div>
                        <i onClick={() => setDMenu6(!dMenu6)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                    </ul>
                </li> */}

                {/* Dropdonw for Coaching */}
                {/* <li className={dMenu7 ? "showMenu" : ""} >
                    <div className="iocn-link">
                        <div>
                            <i className='bx bx-message-dots'></i>
                            <span className="link_name">Coaching</span>
                        </div>
                        <i onClick={() => setDMenu7(!dMenu7)} className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                        <li><a href="/">Reports Sub Menu</a></li>
                    </ul>
                </li> */}


            </ul>
        </div>
    )
}

export default SideBar