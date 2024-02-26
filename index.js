const express=require("express")
const dotenv=require("dotenv");
const dbConnect = require("./config/mongoConnect");

dotenv.config();

const app=express();
dbConnect();

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello world"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("server is runing")
})