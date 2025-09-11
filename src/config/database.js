const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:%h0zoUOJTXB2VyOQX.rsc501x.mongodb.net/HelloWorld"
    );
};

connectDB()
    .then(()=>{
        console.log("database is connected");
})
.catch((error)=>{
    console.log("database is not connected");
});
