const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup",(req,res)=>{

});

userRouter.post("/login",(req,res)=>{
    res.json ({
        message:"routes connected successfully"
    })
});

userRouter.post("/",(req,res)=>{
    
});

userRouter.post("/dashboard",(req,res)=>{
    
})


module.exports = {
    userRouter: userRouter
}