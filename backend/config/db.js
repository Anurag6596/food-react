import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anuraggavhane:7447794344@cluster0.0hkaubs.mongodb.net/food-del').then(()=>console.log("DB chalu hai "));

}


