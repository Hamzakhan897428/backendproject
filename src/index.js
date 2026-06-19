// require('dotenv').config({path: './.env'});
// import mongoose from "mongoose";
// import express from "express";
// import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: './.env' });

connectDB();
















/*
const app = express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO-URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
        app.on("error", (error) => {
            console.error("Error starting the server:", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
    */