// here we will define the model of user
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
},{minimize:false}) //if we don not have any data in this case the user cart data will not be created

const userModel = mongoose.model.user || mongoose.model("user",userSchema);
export default userModel;