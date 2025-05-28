import { log } from "console"
import { response } from "../helper/commenrespons"
import { UserDocument } from "../model/user.model"
import { validationResult } from 'express-validator'
// import bcrypt from 'bcrypt'
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
import { constants } from "buffer"
const User = require('../model/user.model')

export const saveUser = async (req, res, next) => {
    try {
        const userDetails:UserDocument = req.body;
        const password=req.body.password
        const passwordHash =await bcrypt.hash(password, 10);
        const user = new User(userDetails);
        user.password =passwordHash;
        const insertUser = await user.save();
        response(req, res, insertUser, 201, "User created successfully");
    }

    catch (err) {
        res.status(500).json({
            message: "Error creating user",
            error: err
        })
        response(req, res, err, 500, err.message)
    }

}
export const Updateuser = async (req, res, next) => {
    try {
        const userDetails: UserDocument = req.body
        const user = new User(userDetails)
        const data = await User.findByIdAndUpdate({ _id: req.body._id }, {
            name: userDetails.name,
            email: userDetails.email
        })
        response(req, res, data, 201, "User updated successfully")
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}
export const geAlltUser = async (req, res, next) => {
    try {
        const userDetails: UserDocument = req.body
        const user = new User(userDetails)
        const data = await User.find()
        response(req, res, data, 201, "get All User Successfully")
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}