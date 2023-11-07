const mongoose = require('mongoose');


const HodSchema = new mongoose.Schema({
 

  email:{
     type:String,
     required:true
  },
  
  Password:{
    type:String,
    reqiured:true

  },
  Branch:{
    type:String

  },
  
  mobile:{
    type:String,

  },
  Gender:{
    type:String

  },
  
  isHod:{
    type:Boolean,
    default:true
    
  }
  

    
},{timestamps:true});


const HOD = mongoose.model('Hods',HodSchema)

module.exports = HOD;