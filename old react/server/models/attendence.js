const mongoose = require('mongoose')


const AttendenceSchema = new mongoose.Schema({
    employee_id:{
        type:String,
        required:true,
        trim:true
    },
    checkin:{
        type:Date,
        default:new Date(),
        required:true,
    },
    checkout:{
        type:Date,
        required:false
    },
    duration:{
        type:Number,
        required:false
    }
},{timestamps:true})


module.exports = mongoose.model('attendence',AttendenceSchema)

