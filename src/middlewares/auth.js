/*const adminAuth=(req,res,next)=>{
        console.log("Admin auth is checked");
    const token="12344";
    const isAdminAuthrized= token==="12344"
    if(!isAdminAuthrized){
        res.status(401).send("Not Authorized");
    }
    else{
        next();
    }
};

module.exports={
    adminAuth,
};*/

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    try {
    const { token } = req.cookies;
    if (!token) {
        throw new Error("Token is not valid!!!!!!!!!");
    }

    const decodedObj = await jwt.verify(token, "Ankur@2003");

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
        throw new Error("User not found");
    }
    req.user = user;
    next();
}  
catch (err) {
    res.status(400).send("ERROR: " + err.message);
}
};
module.exports = {
    userAuth,
};