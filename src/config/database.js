const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:h0zoUOJTXB2VyOQX@cluster1.r9sxvzp.mongodb.net/devTinder"
    );
};
module.exports=connectDB