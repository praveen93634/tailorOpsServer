import mongoose from "mongoose"

export const customerSchema = new mongoose.Schema({
    customerName: {type:String}
}, { timestamps: true })

const customerModel = mongoose.model("customers", customerSchema)