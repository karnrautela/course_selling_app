const { Router } = require("express");
const coursesRouter  = Router();
 
coursesRouter.post("/home",(req,res)=>{
    res.json ({
        message:"routes connected successfully"
    })
})
module.exports = {
    coursesRouter : coursesRouter
}