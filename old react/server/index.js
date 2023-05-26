const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()
const AttendenceRoutes = require('./routes/attendence')
const EmloyeesRoutes = require('./routes/employees')

const UsersRoutes = require('./routes/UserRoutes')
const Forgetpassword = require('./routes/forgetpassword')
const refreshtoken=require('./routes/refereshtoken')


app.use(cors())
// middlewares
app.use(express.json())
app.use('/api/attendence',AttendenceRoutes)
app.use('/api/employees',EmloyeesRoutes)

app.use("/api/user",UsersRoutes)
app.use("/api/forgetpassword",Forgetpassword)
app.use("/api/refreshtoken",refreshtoken)











// Connecting to DataBase
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to Mongo DB!")
}).catch((err)=>{
    console.log("Not Connected",err)
})


app.listen(4600,()=>{
    console.log("Server is Running...")
})