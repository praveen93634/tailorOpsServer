import  * as mongoose from 'mongoose';
export interface EmployeeDocument extends mongoose.Document {
    name: string;
    Steet?: string;
    city?: string;
    state?: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    aadharNumber: string;
    mobileNumber: string;
    panNumber: string;
    isDeleted?: boolean;
    createdOn?: Date;
    createdBy?: string;
    modifiedOn?: Date;
    modifiedBy?: string;
}
const employeeshema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
    },
    aadharNumber: {
        type: String,
        
    },
    mobileNumber: {
        type: String,
        required: true
    },
    panNumber: {
        type: String,
      
    },
    Steet: {
        type: String,
    
    },
    city: {
        type: String,
       
    },
    state: {
        type: String,
    },

    isDeleted: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    modifiedBy: {
        type: String,
    }
});
module.exports = mongoose.model('Employee', employeeshema);