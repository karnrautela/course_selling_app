const express = require("express");
const server = express();
const{ userRouter} = require("./routes/userroutes");
const{ adminRouter} = require("./routes/adminroutes");
const { coursesRouter } = require("./routes/courseroutes");

server.use("/user",userRouter);
server.use("/admin",adminRouter);
server.use("/courses",coursesRouter);


server.listen(5001);

