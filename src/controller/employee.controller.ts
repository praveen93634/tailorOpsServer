import { log } from "console"
import { response } from "../helper/commenrespons"
import { EmployeeDocument } from "../model/employee.model"
import { validationResult } from 'express-validator'
const bcrypt=require('bcrypt')
const Employee = require('../model/employee.model')

/***
 * Author:praveen Kumar
 * Date: 29-05-2025
 * Description: This funtion is used to save the employee
 */
export const saveEmployee = async (req, res, next) => {
    try {
        console.log("req.body", req.body)
        const EmployeeDetails:EmployeeDocument = req.body;
        const password=req.body.password
        const passwordHash =await bcrypt.hash(password, 10);
        const employee = new Employee(EmployeeDetails);
        employee.password =passwordHash;
        const insertEmployee = await employee.save();
        response(req, res, insertEmployee, 201, "Employee created successfully");
    }

    catch (err) {
        res.status(500).json({
            message: "Error creating Employee",
            error: err
        })
        response(req, res, err, 500, err.message)
    }

}
/***
 * Author:praveen Kumar
 * Date: 29-05-2025
 * Description: This funtion is used to update the employee
 */
export const UpdateEmployee = async (req, res, next) => {
    try {
        const EmployeeDetails: EmployeeDocument = req.body
        const employee = new Employee(EmployeeDetails)
        const data = await Employee.findByIdAndUpdate({ _id: req.body._id }, {
            name: EmployeeDetails.name,
            email: EmployeeDetails.email
        })
        response(req, res, data, 201, "Employee updated successfully")
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}
/***
 * Author:praveen Kumar
 * Date: 29-05-2025
 * Description: This funtion is used to get all the employee
 */
export const geAllEmployee = async (req, res, next) => {
    try {
        const EmployeeDetails: EmployeeDocument = req.body
        const employee = new Employee(EmployeeDetails)
        const data = await Employee.find()
        response(req, res, data, 201, "get All Employee Successfully")
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}
/***
 * Author:praveen Kumar
 * Date: 29-05-2025
 * Description: This funtion is used to get employee by Filter
 */
export const getEmployeeFilter=async(req,res,next)=>{
    try{
        var findquary
        var limit=req.query.limit ? req.query.limit : 0;
        var page=req.query.page ? req.query.page : 0;
        let andList:any=[]
        andList.push({isDeleted:false})
        findquary=(andList.length>0)?{ $and: andList }: {};
        let EmployeeList=await Employee.find(findquary).skip(page).limit(limit).sort({createdAt:-1})
        let EmployeeCount=await Employee.countDocuments(findquary)
        response(req,res,{EmployeeList,EmployeeCount},200,"Employee List Fetched Successfully")
    }
    catch(err){
        response(req,res,err,500,err.message)
    }
}