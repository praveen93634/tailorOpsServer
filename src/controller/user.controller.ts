import { log } from "console"
import { response } from "../helper/commenrespons"
import { UserDocument } from "../model/user.model"
const bcrypt=require('bcrypt')
const User = require('../model/user.model')

/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to save the user
 */
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
        response(req, res, err, 500, err.message)
    }

}

/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to update the user
 */
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

/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to get all the user
 */
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
// connectDB()
//     .then(() => {
//         console.log("✅ Connected to DB");
//         app.listen(process.env.PORT, () => {
//             console.log("🚀 Server started");
//         });
//     })
//     .catch((err) => {
//         console.error("❌ DB connection failed:", err);
//     });