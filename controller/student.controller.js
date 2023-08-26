const gitdir = require("../components");
const Student =  require("../models/user.schema");

const Student_add = async(req,res)=>{
    try{
        console.log(req.body);
        await Student.create(req.body);
        res.send("student added"); 
    }
    catch(error){
        res.send(error.message);
    }
};
const studentdata = async(req,res)=>{
    let data = await Student.find();
    res.send(data);
};

const getadmin = (req,res)=>{
    res.render("index");
};

module.exports={Student_add,studentdata,getadmin};