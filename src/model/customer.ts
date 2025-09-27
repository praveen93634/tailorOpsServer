import mongoose from "mongoose"

export const customerSchema = new mongoose.Schema({
    customerName: String
}, { timestamps: true })

const customerModel = mongoose.model("customers", customerSchema)