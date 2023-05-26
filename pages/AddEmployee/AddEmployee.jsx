// import './AddEmployee.css'
import { useState } from 'react'
import axios from 'axios'


const AddEmployee = () => {

    const [error,setError] = useState('')

    const [data, setData] = useState({
        name: "",
        fatherName: "",
        cnic: "",
        phone: "",
        email: "",
        photo: "",
        dob: "",
        role: {
            title: "",
            desc: ""
        },
        checkin: "",
        checkout: ""
    })

    const dataChangeHandler = (e) =>{
        if(e.target.name === "title" || e.target.name === "desc"){
            setData({...data,role:{...data.role,[e.target.name]:e.target.value}})
            return
        }
        setData({...data,[e.target.name]:e.target.value})
    }

    const [tempImage, setTempImage] = useState("")

    const submitData =async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.post('/api/APIemployee',data)
            var resData = res.data
            console.log(resData)
        } catch (error) {
            setError(error.response.data.message)
        }
    }


    return (
        <>
            <div className="AddEmployee">
                <fieldset>
                    <form onSubmit={submitData} >
                        <div className="eachInputItem header">
                            <h1>Add Employee</h1>
                            <label htmlFor="photo">
                                <div className='imgDiv' >
                                    {
                                        tempImage ?
                                            <img src={tempImage ? URL.createObjectURL(tempImage) : "images/user.png"} alt="" /> :
                                            <i className='bx bxs-user'></i>
                                    }
                                </div>
                            </label>
                            <input hidden onChange={(e) => setTempImage(e.target.files[0])} type="file" id="photo" name="photo" accept="image/*" />
                        </div>

                        <div className="eachInputItem">
                            <label htmlFor="name">Name</label>
                            <input onChange={dataChangeHandler} value={data.name} type="text" id="name" name="name" placeholder='Enter Name' required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="fatherName">Father Name</label>
                            <input onChange={dataChangeHandler} value={data.fatherName} type="text" id="fatherName" name="fatherName" placeholder='Enter Father Name' required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="cnic">CNIC No</label>
                            <input onChange={dataChangeHandler} value={data.cnic} type="number" id="cnic" name="cnic" placeholder='Enter CNIC No' required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="phone">Phone No</label>
                            <input onChange={dataChangeHandler} value={data.phone} type="number" id="phone" name="phone" placeholder='Enter Phone No' required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="email">Email</label>
                            <input onChange={dataChangeHandler} value={data.email} type="email" id="email" name="email" placeholder='Enter Email Adresss' required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="dob">Date of Birth</label>
                            <input onChange={dataChangeHandler} value={data.dob} type="date" id="dob" name="dob" required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="title">Role Title</label>
                            <select onChange={dataChangeHandler} value={data.role.title} required id="title" name="title" >
                                <option value="">Select Role</option>
                                <option>Director</option>
                                <option>Teacher</option>
                                <option>Receptionist</option>
                            </select>
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="desc">Role Description</label>
                            <input onChange={dataChangeHandler} value={data.role.desc} id="desc" placeholder='Enter Role Description' name="desc" />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="checkin">Check-in Time</label>
                            <input onChange={dataChangeHandler} value={data.checkin} type="time" id="checkin" name="checkin" required />
                        </div>
                        <div className="eachInputItem">
                            <label htmlFor="checkout">Check-out Time</label>
                            <input onChange={dataChangeHandler} value={data.checkout} type="time" id="checkout" name="checkout" required />
                        </div>
                        <div className="eachInputItem">
                            <button className='AddEmployee-button'>Add Employee</button>
                        </div>
                        <p className="errorPara">
                            {error}
                        </p>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default AddEmployee