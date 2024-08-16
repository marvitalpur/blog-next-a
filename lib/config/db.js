import mongoose from "mongoose";

 export const ConnectDb = async ()=>{
   await mongoose.connect('mongodb+srv://marvitalpur895:Pakistan123@cluster0.mscaz5o.mongodb.net/blog-app');
   console.log("DB Connected")
}