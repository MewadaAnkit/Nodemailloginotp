const mongoose = require('mongoose');


const EligibilitySchema = new mongoose.Schema({
  Eligibility:{
    type:String,
    required:true
  },
  
    
},{timestamps:true});


const Eligibility = mongoose.model('Eligibility',EligibilitySchema)

module.exports = Eligibility;