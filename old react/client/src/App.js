import React from 'react'
import Layout from './Layout'
import './components/table/table.css'
import AddEmployee from './pages/AddEmployee/AddEmployee'
import EmployeesList from './pages/EmployeesList/EmployeesList'
import Login from './pages/Login/Login'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import Resetpassword from './pages/forgetpassword/Resetpassword'

// import Table from './components/table/table'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<h1>Dashboard Comming Soon!</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/add-employees' element={<AddEmployee />} />
            <Route path='/employees-list' element={<EmployeesList />} />
            <Route path='/forgetpassword' element={<Forgetpassword/>} />
            <Route path='/resetpassword' element={<Resetpassword/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App