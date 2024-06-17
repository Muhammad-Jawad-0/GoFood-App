import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://muhammadjawad:passwordfordeliveryapp1122.js@cluster0.ks81wvo.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("DB Connected")
        })
}