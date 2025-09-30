import mongoose from "mongoose"

export const tenentSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true})
const tenentModel=mongoose.model("tenents",tenentSchema)