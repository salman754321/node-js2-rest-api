const mongoos=require('mongoose');

var courseSchema= new mongoos.Schema({
    courseName:{
        type:String,
        required:"Required"
    },
    courseID:{
        type:String
    },
    courseDurtion:{
        type:String
    },
    courseFee:{
        type:String
    }
});
mongoos.model("Course",courseSchema);