import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name required !!"]
    },
    email:{
        type:String,
        required:[true,"email required !!"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password required !!"],
    },
    telephone:Number
})

export const User = mongoose.model("users",userSchema)