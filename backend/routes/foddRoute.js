import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";


const foodRouter = express.Router();

// image storage engine


const storage = multer.diskStorage({
    destination:"uploads",
    filename:() => {
        (req,file,cb)=>{
            return cb(null,`${Date.now()}${file.originalname}`)

        }
    }
})


const upload = multer({storage:storage})  // middle ware to add imnages to uploades folder

foodRouter.post("/add",addFood)






export default foodRouter;