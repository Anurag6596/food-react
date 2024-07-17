import mongoose from "mongoose";

// creating schema to desribe food model properties 


const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:false},
    price: {type:Number,required:false},
    image: {type:String,required:false},
    category: {type:String,required:false}
})


const foodModel = mongoose.models.food || mongoose.model('food',foodSchema)

export default foodModel;