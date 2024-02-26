const { Schema, default: mongoose } = require("mongoose");

const userModel=new Schema({
    name:String
})

module.exports=mongoose.model("user",userModel)