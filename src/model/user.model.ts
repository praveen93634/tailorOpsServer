import  * as mongoose from 'mongoose';
export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    orgName:string;
    loginType: string;
    location:string
    TenentId:String;
    plantype:String;
    isSubscribed:true;
    isdefault:number;
    isDeleted?: boolean;
    createdOn?: Date;
    createdBy?: string;
    modifiedOn?: Date;
    modifiedBy?: string;
}
export const usershema = new mongoose.Schema({
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
    plantype:{
        type:String,
    },
    location:{type:String},
    orgName:{type:String},
    TenentId:{type:String},
    loginType:{type:String,default:"user"},
    isSubscribed:{type:Boolean,default:false},
    isdefault:{type:Number},
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