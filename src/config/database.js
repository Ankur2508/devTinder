const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:%h0zoUOJTXB2VyOQX@namastenode.rsc501x.mongodb.net/devTinder"
    );
};
module.exports=connectDB