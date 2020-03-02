const connection=require('./model');
const express=require('express');
const appliaction=express();
const path=require('path');
const expresshandlerbar=require('express-handlebars');
const bodyparser=require('body-parser');

require('./model/course.model');
const courseController=require("./controlers/course");

appliaction.use(bodyparser.urlencoded({
    extended:true
}));

appliaction.engine("hbs",expresshandlerbar({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutdir:__dirname+"/views/layouts"
}));

appliaction.set("view engine","hbs");
appliaction.set('views',path.join(__dirname,"/views"));

appliaction.use("/course",courseController);

appliaction.get("/",(req,res)=>{
    res.render("index",{});
});
appliaction.listen(3000,()=>{
    console.log("server Started")
});