// here we will create our login and signup 

import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken" // using this i will crete here authentication
import bcrypt from "bcryptjs" // using this i will hash the password 
import validator from "validator"

//creating loginuser 

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user  = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false,message:"User hai hi nahi"})
        }

        const isMatched = await bcrypt.compare(password,user.password);

        if (!isMatched) {
            return res.json({success:false,message:"invalid credentials"})
        }
        //if password is matched we will create the user token
        const token  = createToken(user._id); 
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.findOnejson({success:false,message:"error"})
        
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//creating register user

const registerUser = async (req,res) => {
    const{name,password,email} = req.body;
    try {
        // cahecking is user already exist
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"USer already exist"})
        }

        // valiidating email and strong password 
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong password with combination of alphnumeric values"})

        }

        //hasing the user password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user =  await newUser.save() //saving the new user credentials 
        //creating token to send response to the user

        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error creating user"})
        
    }
}

export {loginUser,registerUser}