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

/*const express=require("express");

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
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong");
    }
});


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});*/

const express=require("express");
const connectDB=require("./config/database");
const app= express();
const User=require("./models/user");

app.use(express.json());

app.post("/signup",async(req,res)=>{
    //Creating a new instance of user model
    const user=new User(req.body);

    try{
    await user.save();
    res.send("user added successfully");
}
    catch(err){
        res.status(400).send("Error adding user: " + err.message);
    }
});
//user by email
app.get("/user",async(req,res)=>{
    const userEmail=req.body.email;
    try{
        const user=await User.find({email:userEmail});
        res.send(user);
    }
    catch(err){
        res.status(400).send("Error fetching user: " + err.message);
    }
});
//all users fetch from feed
app.get("/feed",async(req,res)=>{
    try{
        const user=await User.find();
        res.send(user);
    }
    catch(err){
        res.status(400).send("Error fetching feed: " + err.message);
    }
});

app.get("/hello",async(req,res)=>{
    const userId=req.body.id;
    try{
        const user=await User.findOne({id:userId});
        res.send(user);
    }
    catch(err){
        res.status(400).send("error fectching user id")
    }
});

app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("user deleted successfully");
    }
    catch(err){
        res.status(400).send("error decting user id");
    }
});

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, data, {
            returnDocument: "after",
        });
        console.log(user);
    res.send("User updated successfully");
    } 
    catch (err) 
    {
    res.status(400).send("Something went wrong ");
    }
});
connectDB()
    .then(()=>{
        console.log("database is established");
        app.listen(3000,()=>{
            console.log("server is listening on port 3000");
        });
    })
    .catch((err)=>{
        console.error("database is not established");
    });