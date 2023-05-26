const router = require('express').Router()
const { startOfDay, endOfDay } = require('date-fns')
const AttendenceModal = require('../models/attendence')
const EmployeesModal = require('../models/employees')



router.post('/place-attendence/:id', async (req, res) => {

    try {
        var employee_id = req.params.id

        // Find Employee by Employee ID
        var foundEmployee = await EmployeesModal.findById(employee_id)

        // Check for checkin within time duration
        var employeeCheckout = {
            hour: Number(foundEmployee.checkout.split(":")[0]),
            min: Number(foundEmployee.checkout.split(":")[1])
        }



        if (new Date().getHours() === employeeCheckout.hour) {
            if (!(new Date().getMinutes() < employeeCheckout.min)) {
                return(
                    res.json({
                        success:false,
                        message:"Sorry! You are Lait"
                    })
                )
            }
        }

        if (new Date().getHours() < employeeCheckout.hour) {
            return(
                res.json({
                    success:false,
                    message:"Sorry! You are Lait"
                })
            )
        }

        // check for same day checkin
        var sameDayCheckedIn = await AttendenceModal.findOne({ employee_id, checkin: { $gte: startOfDay(new Date()), $lt: endOfDay(new Date()) } })

        if (sameDayCheckedIn) {
            // checkout section
            res.send("checkout")
        } else {
            const placedAttendence = await AttendenceModal.create({ employee_id })
            res.status(201).json({
                success: true,
                message: placedAttendence
            })
        }


    } catch (error) {
        if (error.kind === "ObjectId") {
            return (
                res.status(404).json({
                    success: false,
                    message: "Employee with this ID Not Found"
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