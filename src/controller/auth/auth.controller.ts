import { error } from 'console';
import { response } from '../../helper/commenrespons';
const bcrypt = require('bcrypt')
import { errorMessage } from '../../helper/errorMessage';
import { hash } from 'crypto';
const User = require('../../model/user.model')
// import {jwt} from 'jsonwebtoken'
const jwt = require('jsonwebtoken')

    /***
     * Author:praveen Kumar
     * Date: 26-05-2025
     * Description: This funtion is used to handle the signup 
     */
    
export const signup = async (req, res, next) => {
    try {
        const { name, email, password, age } = req.body;
        const passwordhash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: passwordhash, age });
        const insertUser = await user.save();
        response(req, res, insertUser, 201, "User created successfully");
    } catch (err) {
        response(req, res, err, 500, err.message);
    }
}
/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to handle the login 
 */
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email: email })        
        if (!data) {
            response(req, res, "login User", 422, errorMessage.invalid)
        }
        const compare = await bcrypt.compare(password, data.password)
        if (compare) {
            const gentoken = await jwt.sign({ _id: data._id,loginType:data.loginType }, process.env.JWT_SECRET, { expiresIn: "1d" })
            response(req, res, { token: gentoken,user:data }, 200, "User login Sucessfully")
        }
        else {
            response(req, res, "login User", 500, errorMessage.invalid)
        }
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}