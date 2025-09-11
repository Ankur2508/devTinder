const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://Ankur:Ankursangwan@namastenode.rsc501x.mongodb.net/"
    );
};

connectDB()
    .then(()=>{
        console.log("database is connected");
})
.catch((error)=>{
    console.log("database is not connected");
});
