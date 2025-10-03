import { log } from "console"
import { response } from "../helper/commenrespons"
import { UserDocument } from "../model/user.model"
import { getTenentModel } from "../config/dbAdmin"
import { Counter } from "../model/count.model"
import { getTenantDB } from "../config/tenentdb"
const bcrypt = require('bcrypt')
const User = require('../model/user.model')

/***
 * Author:praveen Kumar
 * Date: 26-05-2025
 * Description: This funtion is used to save the user
 */
export const createUser = async (req, res, next) => {
    try {
        const userDetails: UserDocument = req.body;
          const counter = await Counter.findOneAndUpdate(
    { name: "tenantId" },       
    { $inc: { seq: 1 } },     
    { new: true, upsert: true } 
  );
  let tenandId=counter.seq;
        const passwordHash = await bcrypt.hash(userDetails.password, 10);
        const UserModel = await getTenentModel();
        const superAdminUser = new UserModel(userDetails);
        superAdminUser.password = passwordHash;
        superAdminUser.isdefault = 2;
        superAdminUser.TenentId = tenandId
        await superAdminUser.save();
        const tenantDb = await getTenantDB(tenandId);
        const TenantUserModel = tenantDb.model("User", User.schema);
        const tenantUser = new TenantUserModel(userDetails);
        tenantUser.password = passwordHash;
        tenantUser.TenentId = tenandId
        tenantUser.isdefault = 2;
        await tenantUser.save();
        response(req, res, "", 201, "User + Tenant created successfully");
    }
    catch (err) {
        response(req, res, err, 500, err.message)
    }
}
// app.post('/tenant', async (req, res) => {
//    try{
//      let {tenantId,name} = req.body;
//     let tenantModel = await getTenentModel();
//     let tenant = new tenantModel({ id: tenantId, name: name });
//      if (!tenant) {
//             return response(req,res,"",404,"Not Found") 
//         }
//     let doc = await tenantModel.findOneAndUpdate({ id: tenantId }, { id: tenantId, name: name });
//     if (!doc) {
//     tenant = new tenantModel({ id: tenantId, name: name });
//       await tenant.save(); 
//     }
//    return response(req,req,tenant,200,"SuccessFully Created")
//    }
//    catch(error:any){
//     response(req,res,error,500,error.message)
//    }
// })


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