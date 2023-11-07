const mongoose = require('mongoose');

const EligibilityGradPerSchema = new mongoose.Schema({
  gen: {
    type: Number,
    required: true
  },
  obc:{
    type: Number,
    required: true
  },
  sc: {
    type: Number,
    required: true
  },
  st: {
    type: Number,
    required: true
  },
  ph: {
    type: Number,
    required: true
  }
});
const BranchSchema = new mongoose.Schema({
  branchName: {
    type: String,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  eligibilityGradPer:EligibilityGradPerSchema
});

const CourseNameSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  branches: [BranchSchema]
});

const CourseTypeSchema = new mongoose.Schema({
  courseType: {
    type: String,
    enum: ['UG', 'PG', 'Diploma'],
    required: true
  },
  courseNames: [CourseNameSchema]
});

const Course = mongoose.model('sssutmsCourse', CourseTypeSchema);

module.exports = Course;
