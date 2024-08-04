//createing a serevr using express

import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foddRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'


// app config

const app = express()
const port = 4000


// middle ware 
app.use(express.json())  // request from frontend to backend will be pardes here
app.use(cors()) // we can accesss the backend data from any frontend

// db connection 

connectDB();

// API endpoint 
app.use("/api/food",foodRouter);
app.use("/api/user",userRouter);


app.get("/",(req,res)=>{
    res.send("Kaam chalu hai API ka")
}) // from this we can request the data from the server 


app.listen(port,()=>{
    console.log(`Server chalu hai https://localhost:${port}`)
})
