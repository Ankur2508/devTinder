const express=require("express");

const app=express();

app.use("/hello",(req,res)=>{
    res.send("hello from express")
});

app.use("/test",(req,res)=>{
    res.send("hello world")
});

app.use("/wow",(req,res)=>{
    res.send("wow this is great!")
});

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});
