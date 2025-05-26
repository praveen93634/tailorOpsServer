import { error } from 'console';
import { response } from '../../helper/commenrespons';
import bcrypt from 'bcrypt'
import { errorMessage } from '../../helper/errorMessage';
const User = require('../../model/user.model')
/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to handle the signup 
 */
export const signup = async (req, res, next) => {
    try {
        const { name, email, password, age } = req.body;
        const passwordHash = bcrypt.hash(password, 10);
        const user = new User({ name, email, password: passwordHash, age });
        const insertUser = await user.save();
        response(req, res, insertUser, 201, "User created successfully");
    } catch (err) {
        response(req, res, err, 500, err.message);
    }
}
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email: email })
        if (!data) {
            response(req, res, "login User", 422, errorMessage.invalid)
        }
        const compare = await bcrypt.compare(password, data.password)
        if (compare) {
            response(req, res, "login User", 200, "User login Sucessfully")
        }
        else {
            response(req, res, "login User", 200, errorMessage.invalid)
        }
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}