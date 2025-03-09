const express = require("express");
const server = express();
const{ userRouter} = require("./routes/userroutes");
const{ adminRouter} = require("./routes/adminroutes");

server.use("/user",userRouter);

server.use("/admin",adminRouter);

server.listen(5001);

