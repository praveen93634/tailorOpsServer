import  * as mongoose from 'mongoose';
export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    age: number;
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
    }
});
module.exports = mongoose.model('User', usershema);