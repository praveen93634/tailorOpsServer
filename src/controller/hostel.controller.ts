
import { response } from "../helper/commenrespons"
import { hostelDocument } from "../model/hotel.model"
const hostel = require('../model/hotel.model')

/*****
 * Author:Praveen
 * Date:12-06-25
 * Description:this function is used to save the hostel 
 */
export const saveHostel = async (req, res, next) => {
    try {
        const hostelDetail: hostelDocument = req.body
        const data = new hostel(hostelDetail)
        await data.save()
        response(req, res, "hostel Saved", 200, "Hostel Saved Sucessfully")
    }
    catch (err) {
        response(req, res, "save hostel", 500, err.message)
    }
}
export const UpdateHostel=async (req,res,next)=>{
    try{
        const hostelDetail: hostelDocument = req.body
        const data=await hostel.findByIdAndUpdate({
            $set:{
                
            }
        })
    }
    catch(err){

    }
}