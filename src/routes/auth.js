const express=require("express");

const authRouter=express.Router();
const {validatesignupdata}=require("../utils/validators");
const User=require("../models/user");
const bcrypt=require("bcrypt");

authRouter.post("/signup",async(req,res)=>{
    //Creating a new instance of user model
    try{
        validatesignupdata(req);
    const{firstname,lastname,email,password}=req.body;
    const passwordHash=await bcrypt.hash(password,10);
    const user=new User({
        firstname,
        lastname,
        email,
        password:passwordHash
    });
    await user.save();
    res.send("user added successfully");
}
    catch(err){
        res.status(400).send("Error" + err.message);
    }
});

authRouter.post("/login",async(req,res)=>{
    try{
        const{email,password}=req.body;

        const user=await User.findOne({email:email});
        if(!user){
            throw new Error("email id is not valid");
        }
        const isPasswordValid= await user.validatePassword(password);
        if(isPasswordValid){
            const token=await user.getJWT();
            res.cookie("token",token,{
                expires:new Date(Date.now()+8*3600000)
            });
            res.send("user logged successfully");
        }
        else{
            throw new Error("invalid password");
        }
    }
    catch(err){
        res.status(400).send("Error:"+err.message);
    }
});

module.exports={
    authRouter,
};