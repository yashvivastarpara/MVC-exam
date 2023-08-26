const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    username:String,
    number : Number,
    email : String,
});

const Student = mongoose.model("Student",studentSchema);
module.exports=Student;