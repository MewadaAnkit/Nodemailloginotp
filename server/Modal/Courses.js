const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
  CourseType:{
    type:String,
    
  },
  CourseName:{
     type:String,
  },
  CourseBranch:{
    type:Date,
  } ,

    
},{timestamps:true});


const Course = mongoose.model('Courses',CourseSchema)

module.exports = Course;