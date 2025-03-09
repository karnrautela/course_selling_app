const {Router} = require("express");
const adminRouter = Router();
const { adminModel } = require("../models/db");
adminRouter.post("/signup",(req,res)=>{
    res.json ({
        message:"routes connected successfully"
    })
});
adminRouter.post("/login",(req,res)=>{

});
adminRouter.post("/createcourse",(req,res)=>{

});

adminRouter.post("/editcourse",(req,res)=>{

});

module.exports = {
    adminRouter : adminRouter
}