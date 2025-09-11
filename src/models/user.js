const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    }

});
const User=mongoose.model("User",userSchema);
module.exports=User;
