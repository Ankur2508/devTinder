const express=require("express");

const app=express();

//this will only handle GET call to /user
app.get("/user",(req,res)=>{
   //console.log(req.query);
    res.send({firstName:"Ankur",lastName:"Sangwan"});
});

//this will match all types Http methods API calls to /wow
app.use("/wow",(req,res)=>{
    res.send("wow this is great!")
});
app.post("/how",(req,res)=>{
    console.log(req.query);
    res.send("how are you?")
});

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});
