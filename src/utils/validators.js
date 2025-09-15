const validator=require("validator");

const validatesignupdata=(req)=>{
    const{firstname,lastname,email,password}=req.body;
    if(!firstname|| !lastname){
        throw new Error("name is required");
    }else if(!validator.isEmail(email)){
        throw new Error("email is invalid");
    }else if(!validator.isStrongPassword(password)){
        throw new Error("password is not strong");
    }
}
module.exports={validatesignupdata}