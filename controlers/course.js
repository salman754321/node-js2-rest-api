const express= require("express");
const mongoose=require('mongoose');

const courseModel=mongoose.model("Course")
const router=express.Router();


router.get("/list",(req,res)=>{
    courseModel.find((err,docs)=>{
        if(!err)
        {
            
            res.render("list",{ data:docs });
        }else{
            res.send("Error");
        }
    })
});
router.get("/Add",(req,res)=>{
    res.render("Add" ,{})
       
    });

    router.post("/Add",(req,res)=>{
        var c=new courseModel();
        c.courseName=req.body.Cname;
        c.courseID=req.body.cid;
        console.log( c.courseID);
        c.save();
       
        res.redirect("/course/list");
   
});

router.get("/Edit/:id",(req,res)=>{
    var Id=req.params.id;
    console.log(Id);
    courseModel.find({"_id":Id},function(err,data)
    {
        if (!err) {
            res.render("edit" ,{data})
            console.log(data);
        }else{
            res.send(err);
        }
    });
});

module.exports=router;

