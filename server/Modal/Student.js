const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
     type:String,
     required:true
  },
  dob:{
    type:Date,
    required:true
  } ,
  randomId :{
    type:String,

  },
  randomPassword:{
    type:String,

  },
  CourseName:{
    type:String,

  },
  CourseType:{
    type:String,

  },
  CourseBranch:{
    type:String

  }
    
},{timestamps:true});


const Student = mongoose.model('Students',StudentSchema)

module.exports = Student;