import { log } from "console"
import { response } from "../helper/commenrespons"
import { EmployeeDocument, employeeshema } from "../model/employee.model"
import { validationResult } from 'express-validator'
// import  getEmployee  from "../utils/tenantconnection"
const {getEmployee}=require('../utils/tenantconnection')
// import {getEmployee} from '../utils/tenantconnection'
const bcrypt=require('bcrypt')

/***
 * Author:praveen Kumar
 * Date: 29-05-2025
 * Description: This funtion is used to save the employee
 */
export const saveEmployee = async (req, res, next) => {
  
    try {
        console.log("req.body", req.body)
        const EmployeeDetails:EmployeeDocument = req.body;
          const EmployeeModel=await getEmployee(req.user.TenentId);
    console.log("EmployeeModel",EmployeeModel)
        const password=req.body.password
        const passwordHash =await bcrypt.hash(password, 10);
        const employee = new EmployeeModel(EmployeeDetails);
        employee.password =passwordHash;
        const insertEmployee = await employee.save();
        response(req, res, insertEmployee, 201, "Employee created successfully");
    }

    catch (err) {
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
         const EmployeeModel=await getEmployee(req.user.TenentId);
        const employee = new EmployeeModel(EmployeeDetails)
        const data = await EmployeeModel.findByIdAndUpdate({ _id: req.body._id }, {
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
         const EmployeeModel=await getEmployee(req.user.TenentId);
        const employee = new EmployeeModel(EmployeeDetails)
        const data = await EmployeeModel.find()
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
        var limit=req.body.limit ? req.body.limit : 0;
        var page=req.body.page ? req.body.page : 0;
        let andList:any=[]
        andList.push({isDeleted:false})
        findquary=(andList.length>0)?{ $and: andList }: {};
         const EmployeeModel=await getEmployee(req.user.TenentId);
        let EmployeeList=await EmployeeModel.find(findquary).skip(page).limit(limit).sort({createdAt:-1})
        let EmployeeCount = EmployeeList?.length 
        response(req,res,{EmployeeList,EmployeeCount},200,"Employee List Fetched Successfully")
    }
    catch(err){
        response(req,res,err,500,err.message)
    }
}

