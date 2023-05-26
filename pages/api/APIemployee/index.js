import EmployeeModel, { db } from "../../../models/employees";
// var EmployeeModel = mongoose.model('EmployeeModel')
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "POST") {
    // Process a POST request
   
    
    try {
      const employee = req.body;
      const newEmployee = new EmployeeModel(employee);
      await newEmployee.save();

      res.status(201).json({
        success: true,
        message: newEmployee,
      });
    } catch (err) {
      // For duplicate CNIC, Email and Phone Error Handling
      if (err.code === 11000 && err.keyPattern.cnic) {
        return res.status(409).json({
          success: false,
          message: "CNIC Already Exist!",
        });
      }
      if (err.code === 11000 && err.keyPattern.email) {
        return res.status(409).json({
          success: false,
          message: "Email Already Exist!",
        });
      }
      if (err.code === 11000 && err.keyPattern.phone) {
        return res.status(409).json({
          success: false,
          message: "Phone Number Already Exist!",
        });
      }

      var errorMessage = err.message?.split(":")[2]?.trim();
      if (errorMessage) {
        return res.status(400).json({
          success: false,
          message: errorMessage,
        });
      }

      res.status(500).json({
        success: false,
        message: "Something Went Wrong!",
      });
    }



    // get employees
  } else if (req.method === "GET") {
    // dbConnect();
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
    // Handle any other HTTP method
  }
}
