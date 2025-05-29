import { log } from "console"
import { response } from "../helper/commenrespons"
import { EmployeeDocument } from "../model/employee.model"
import { validationResult } from 'express-validator'
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
import { constants } from "buffer"
const Employee = require('../model/employee.model')

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