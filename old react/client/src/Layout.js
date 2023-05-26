import SideBar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import { useLocation } from 'react-router-dom'


const Layout = ({ children }) => {

    const { pathname } = useLocation()

    return (
        <div id='wholeLayout' >

            {pathname === "/login" ? children :
                <>
                    <Navbar />
                    <div className='mainWithSideBar' >
                        <SideBar />
                        <main style={{ width: '50px' }} className="mainContent">
                            <div className="innerMainCententWrapper">
                                {children}
                            </div>
                        </main>
                    </div>
                </>
            }
        </div>
    )
}

export default Layout