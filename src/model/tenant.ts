import mongoose from "mongoose"

export const tenentSchema=new mongoose.Schema({
    id:String,
    name:String
},{timestamps:true})
const tenentModel=mongoose.model("tenents",tenentSchema)