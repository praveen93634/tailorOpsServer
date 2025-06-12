import mongoose from "mongoose";

export interface hostelDocument extends mongoose.Document{
    _id:any;
    name:String;
    floor:any[]
    roomName:string;
    isOccupied:boolean;
    isDelete:boolean;
    createdOn:Date
    createdby:string
    modifiedOn:Date;
    modifiedBy:string
}
const hostelSchema=new mongoose.Schema({
_id:{type:mongoose.Schema.ObjectId,auto:true},
name:{type:String},
floor:[
    
]
})
module.exports=mongoose.model('hostel',hostelSchema)