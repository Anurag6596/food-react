import { response } from "express";
import foodModel from "../models/foodModel.js";

import fs from 'fs'


// add food item also using this we will crete one route

const addFood = async (req,res) => {
    

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        Image: image_filename
    })


    try {
        await food.save();
        res.json({sucess:true,message:"food added"})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"})
    }
}


export{addFood}