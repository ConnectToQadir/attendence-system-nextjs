const router = require("express").Router()
const bcrypt = require("bcrypt")
const { Error } = require("mongoose")
const EmployeeModel = require("../models/employees")

// add employee
router.post("/add", async (req, res) => {
  try {
    const employee = req.body
    const newEmployee = new EmployeeModel(employee)
    await newEmployee.save()

    res.status(201).json({
      success: true,
      message: newEmployee
    })
  } catch (err) {


    // For duplicate CNIC, Email and Phone Error Handling
    if (err.code === 11000 && err.keyPattern.cnic) {
      return (res.status(409).json({
        success: false,
        message: "CNIC Already Exist!"
      }))
    }
    if (err.code === 11000 && err.keyPattern.email) {
      return (
        res.status(409).json({
          success: false,
          message: "Email Already Exist!"
        })
      )
    }
    if (err.code === 11000 && err.keyPattern.phone) {
      return (
        res.status(409).json({
          success: false,
          message: "Phone Number Already Exist!"
        })
      )
    }


    var errorMessage = err.message?.split(":")[2]?.trim()
    if (errorMessage) {
      return (
        res.status(400).json({
          success: false,
          message: errorMessage
        })
      )
    }

    res.status(500).json({
      success: false,
      message: "Something Went Wrong!"
    })

  }
})

// get employees
router.get("/", async (req, res) => {
  try {

    var match = {}

    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const skip = (page - 1) * limit

    if(req.query.keyword){
      match.$or = [{name:new RegExp(req.query.keyword,"i")},{phone:new RegExp(req.query.keyword)}]
    }




    const employees = await EmployeeModel.find(match).limit(limit).skip(skip)
    const total = await EmployeeModel.find().count()
    res.status(200).json({
      success: true,
      message: {
        data:employees,
        count:total
      }
    })
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Something Went Wrong!"
    })
  }
})

// Update Employee By ID
router.put("/:id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id)

    if (!employee) {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }


    const newEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})

    res.status(200).json({
      success: true,
      message: newEmployee
    })

  } catch (err) {


    // For duplicate CNIC, Email and Phone Error Handling
    if (err.code === 11000 && err.keyPattern.cnic) {
      return (res.status(409).json({
        success: false,
        message: "CNIC Already Exist!"
      }))
    }
    if (err.code === 11000 && err.keyPattern.email) {
      return (
        res.status(409).json({
          success: false,
          message: "Email Already Exist!"
        })
      )
    }
    if (err.code === 11000 && err.keyPattern.phone) {
      return (
        res.status(409).json({
          success: false,
          message: "Phone Number Already Exist!"
        })
      )
    }

    if (error.kind === 'ObjectId') {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }

    res.status(500).json({
      success: false,
      message: "Something Went Wrong!"
    })
  }
})

// Delete Employee By ID
router.delete("/:id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id)

    if (!employee) {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }


    const deletedEmployee = await EmployeeModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      message: deletedEmployee.name + " Employee Deleted Successfully!"
    })

  } catch (error) {

    if (error.kind === 'ObjectId') {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }

    res.status(500).json({
      success: false,
      message: "Something Went Wrong!"
    })
  }
})

// Get Specific Employee By ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id)

    if (!employee) {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }

    res.status(200).json({
      success: true,
      message: employee
    })

  } catch (error) {
    if (error.kind === 'ObjectId') {
      return (
        res.status(404).json({
          success: false,
          message: "Employee Not Found!"
        })
      )
    }
    res.status(500).json({
      success: false,
      message: "Something Went Wrong!"
    })
  }
})



module.exports = router