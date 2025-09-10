const adminAuth=(req,res,next)=>{
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
};