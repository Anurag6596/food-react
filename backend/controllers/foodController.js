import { response } from "express";
import foodModel from "../models/foodModel.js";

import fs from 'fs'


// add food item also using this we will crete one route

const addFood = async (req,res) => {
    

    // let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        // Image: image_filename
    })


    try {
        await food.save();
        res.json({sucess:true,message:"food added"})
    } catch (error) {
        console.log(error.message);
        res.json({sucess:false,message:error.message})
    }
}

//all food list 

const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({}); // in this we will  get all the data of food item
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}


// remove food item 

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        await foodModel.findByIdAndDelete(req.body.id); // food data will be deleted from the db
        res.json({success:true,message:"food items deleted"})
    } catch (error) {
        console.log(error.messaged);
            res.json({success:false,message:error.message})
        
        
    }
}


export{addFood,listFood,removeFood}