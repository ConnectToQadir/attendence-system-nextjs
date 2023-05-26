import { useState } from 'react'

// import { Link } from 'react-router-dom'
import Link from 'next/link'

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
                    <Link href="/">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="link_name">Dashboard</span>
                    </Link>
                </li>

                {/* <li>
                    <Link href="/employees">
                        <i className='bx bx-group'></i>
                        <span className="link_name">Employees</span>
                    </Link>
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
                        <Link href="/AddEmployee/AddEmployee">Add Employee</Link>
                        <Link href="/EmployeesList/EmployeesList">Employees List</Link>
                    </ul>
                </li>

               


            </ul>
        </div>
    )
}

export default SideBar