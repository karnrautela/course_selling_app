const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/course_selling_app")
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: String,
    password: String,
    firstname: String,
    lastname: String
});

const adminSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: String,
    password: String,
    firstname: String,
    lastname: String
});

const courseSchema = new mongoose.Schema({
    tile: String,
    descriptions: String,
    price: Number,
    imageurl : String,
    creatorid: ObjectId
});

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId:ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);
module.exports ={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}