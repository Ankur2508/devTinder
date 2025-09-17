const mongoose=require("mongoose");
const validator=require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const UserSchema=new mongoose.Schema(
    {
    firstname:{
        type:String,
        required:true,
        minlength:4,
        maxlength:12
    },
    lastname:{
        type:String,
        required:true,
        maxlength:12
    },
    age:{
        type:Number,
        min:18
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:30,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("email is not valid");
        },
    },
    password:{
        type:String,
        minlength:6,
        validate(value){
            if(!validator.isStrongPassword(value))
                throw new Error("password is not strong enough");
        },
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("gender is not valid");
            }
        },
    },
    photoUrl:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        validate(value){
            if(!validator.isURL(value))
                throw new Error("photoUrl is not valid");
        }
    },
    bio:{
        type:String,
        default:"Hey there! I am ",
        maxlength:100
    },
    skills:{
        type:[String],
    },
    timestamps:{
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
    }
}, 
{
    timestamps:true
}
);

UserSchema.methods.getJWT = async function () {
    const user = this;

const token = await jwt.sign({ _id: user._id }, "Ankur@2003", {
    expiresIn: "7d",
});

return token;
};

UserSchema.methods.validatePassword = async function (passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;

const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
);

return isPasswordValid;
};

module.exports=mongoose.model("User",UserSchema);

