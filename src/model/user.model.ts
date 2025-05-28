import  * as mongoose from 'mongoose';
export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    loginType: string;
    age: number;
    isDeleted?: boolean;
    createdOn?: Date;
    createdBy?: string;
    modifiedOn?: Date;
    modifiedBy?: string;
}
const usershema = new mongoose.Schema({
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
    age: {
        type: Number,
        required: true
    },
    loginType:{type:String,default:"user"},
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
module.exports = mongoose.model('User', usershema);