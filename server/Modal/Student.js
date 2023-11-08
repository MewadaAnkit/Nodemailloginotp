const mongoose = require('mongoose');


const AddressSchema = new mongoose.Schema({
  currentAddress: {
    address1: String,
    address2: String,
    country: String,
    state: String,
    district: String,
    pinCode: String,
  },
  permanentAddress: {
    address1: String,
    address2: String,
    country: String,
    state: String,
    district: String,
    pinCode: String,
  },
});

const ProfessionalDetailsSchema = new mongoose.Schema({
  Handicapped: String,
  Medium: String,

  ScholarshipRequired: String,
  FathersOccupation: String,
  MothersOccupation: String,
  FathersIncome: String,
  MothersIncome: String,
  SamagraId: String,
  AadharNumber: String,
  ParentMobile: String,
});


const AcademicDetailsSchema = new mongoose.Schema({
  tenthSchool: String,
  tenthPassingYear: String,
  tenthRollNo: String,
  tenthBoard: String,
  tenthExamType: String,
  tenthMarksObtain: String,
  tenthMaxMarks: String,
  tenthPercentage: String,
  twelfthSchool: String,
  twelfthPassingYear: String,
  twelfthRollNo: String,
  twelfthBoard: String,
  twelfthExamType: String,
  twelfthMarksObtain: String,
  twelfthMaxMarks: String,
  twelfthPercentage: String,
  graduationSchool: String,
  graduationPassingYear: String,
  graduationRollNo: String,
  graduationBoard: String,
  graduationExamType: String,
  graduationMarksObtain: String,
  graduationMaxMarks: String,
  graduationPercentage: String,
  postGraduationSchool: String,
  postGraduationPassingYear: String,
  postGraduationRollNo: String,
  postGraduationBoard: String,
  postGraduationExamType: String,
  postGraduationMarksObtain: String,
  postGraduationMaxMarks: String,
  postGraduationPercentage: String,
  otherSchool: String,
  otherPassingYear: String,
  otherRollNo: String,
  otherBoard: String,
  otherExamType: String,
  otherMarksObtain: String,
  otherMaxMarks: String,
  otherPercentage: String,
});
const PhotoSignSchema = new mongoose.Schema({
        photo:String,
        signature:String
});


const StudentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
     type:String,
     required:true
  },
  academicDetails: AcademicDetailsSchema,
  address: AddressSchema,
  professional:ProfessionalDetailsSchema,
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
  },
  fathersname:{
    type:String,
  },
  mothersname:{
    type:String,
  },
  qualifyingEntranceExam:{
    type:String
  },
  mobile:{
    type:String,

  },
  domicile:{
    type:String,

  },
  gender:{
    type:String
  },
  lastExamType:{
    type:String,
  },
  qualification:{
    type:String,
  },
  passingYear:{
    type:String
  },
  category:{
    type:String,
  },
entranceBasedTypeanceExam:{
    type:String,
  },
  nationality:{
    type:String
  },
  isApproved:{
    type:Boolean,
    default:false
  },
  isEnrolled:{
    type:Boolean,
    default:false
  },
  isRegistered:{
    type:Boolean,
    default:false
  },
  PhotoSign:PhotoSignSchema


    
},{timestamps:true});


const Student = mongoose.model('Students',StudentSchema)

module.exports = Student;