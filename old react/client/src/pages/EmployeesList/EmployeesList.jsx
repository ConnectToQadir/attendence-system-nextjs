import { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeesList = () => {

    const [employees, setEmployees] = useState({})
    const [loading, setLoading] = useState(false)


    const fetchEmployees = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:4600/api/employees')
            setEmployees(data.message)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchEmployees()
    }, [])


    const convertTimeTo12HoursFormate = (time) => {
        var hours = Number(time.split(":")[0])
        var min = Number(time.split(":")[1])
        var newTime = hours > 12 ? `${hours - 12 < 10 ? "0" : ""}${(hours - 12)}:${min} PM` : time + " AM"
        return newTime
    }



    return (
        <div className='EmployeesList'>
            <div className='Table'>


                <div className="tableHead">
                    <h2>Employees List</h2>
                </div>



                <div className="tableBody withoutFilters">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Sr.</th>
                                <th>Name</th>
                                <th className='textCenter' >Status</th>
                                <th>Role</th>
                                <th>Role Desc</th>
                                <th>Salary</th>
                                <th>Mobile</th>
                                <th>Checkin</th>
                                <th>Checkout</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                loading ?
                                    [1, 1, 1, 1, 1].map((v, i) => {
                                        return (
                                            <tr key={i} className='loading' >
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                                <td><span></span></td>
                                            </tr>
                                        )
                                    })
                                    :
                                    employees.data?.map((v, i) => {
                                        return (
                                            <tr key={i} >
                                                <td><input type="checkbox" /></td>
                                                <td>{i + 1}</td>
                                                <td> <div className='imgDivTd'><div className="imgDiv"><img src={`https://picsum.photos/id/${103}/200/300`} alt="" /></div> {v.name}</div></td>
                                                <td className='status'><p><span className='greenBox' >Active</span></p></td>
                                                <td>{v.role?.title}</td>
                                                <td>{v.role?.desc}</td>
                                                <td>30,000</td>
                                                <td>{v.phone}</td>
                                                <td>{convertTimeTo12HoursFormate(v.checkin)}</td>
                                                <td>{convertTimeTo12HoursFormate(v.checkout)}</td>

                                                <td className='actionsBox'>
                                                    <div data-tooltip="Employee Details" className="eachAction toolTip">
                                                        <i className='bx bx-detail' ></i>
                                                    </div>
                                                    <div data-tooltip="Edit" className="eachAction toolTip">
                                                        <i className='bx bx-edit'></i>
                                                    </div>
                                                    <div data-tooltip="Delete" className="eachAction toolTip">
                                                        <i className='bx bx-trash' ></i>
                                                    </div>
                                                    <div data-tooltip="Whatsapp Now" className="eachAction toolTip">
                                                        <i className='bx bxl-whatsapp' ></i>
                                                    </div>
                                                    <div data-tooltip="Mail Now" className="eachAction toolTip">
                                                        <i className='bx bx-envelope' ></i>
                                                    </div>

                                                </td>
                                            </tr>
                                        )
                                    })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeesList