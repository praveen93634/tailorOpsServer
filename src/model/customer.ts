import mongoose from "mongoose"

export const customerSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.ObjectId,auto:true},
    email:{type:String ,required: true},
    customerName: {type:String}
}, { timestamps: true })

const customerModel = mongoose.model("customers", customerSchema)