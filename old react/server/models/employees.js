const mongoose = require("mongoose");


const EmployeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true,"Name is Required!"],
    },
    fatherName: {
        type: String,
        required: [true,"Father Name is Required!"],
    },
    cnic: {
        type: Number,
        unique:true,
        required: [true,"CNIC is Required!"],
    },
    phone: {
        type: String,
        unique:true,
        required: [true,"Phone Number is Required!"],
    },
    email: {
        type: String,
        unique:true,
        required: [true,"Email is Required!"],
    },
    photo: {
        type: String,
        default:"",
    },
    dob: {
        type: Date,
        required:[true,"Date of Birth is Required!"]
    },
    role: {
        title: {
            type: String,
            required:[true,"Role Title is Required!"]
        },
        desc: {
            type: String,
            required:[true,"Role Description is Required!"]
        }
    },
    checkin: {
        type: String,
        required:[true,"Checkin Time is Required!"]
    },
    checkout: {
        type: String,
        required:[true,"Checkout Time is Required!"]
    }

})

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;