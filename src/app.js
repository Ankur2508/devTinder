/*const express=require("express");

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
*/

/*const express=require("express");

const app=express();

app.use("/user",
    (req,res,next)=>{
    console.log("middleware 1");
    next();
    //res.send("Response!");
    
},
(req,res,next)=>{
    console.log("middleware 2");
    //res.send("Response 2!!");
    next();
},
(req,res,next)=>{
    console.log("middleware 3");
    //res.send("Response 3!!");
    next();
},
(req,res,next)=>{
    console.log("middleware 4");
    //res.send("Response 4!!");
    next();
},
(req,res,next)=>{
    console.log("middleware 5");
    res.send("Response 5!!");
}
);

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});*/

const express=require("express");

const app=express();

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong");
    }
});


app.get("/getUserData",(req,res)=>{
    try
    {
        throw new Error("abcd");
        res.send("user sent data");
    }
    catch(err){
        res.status(500).send("Some error contact support team");
    }

});
/*app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong");
    }
});
*/

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});