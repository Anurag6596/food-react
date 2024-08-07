import mongoose from "mongoose";

// creating schema to desribe food model properties 


const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:false},
    category: {type:String,required:true}
})


const foodModel = mongoose.models.food || mongoose.model('food',foodSchema)

export default foodModel;