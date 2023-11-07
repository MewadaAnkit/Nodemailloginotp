const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
 
  email:{
     type:String,
     required:true
  },
  Password:{
    type:String,
  },
  role:{
    type:Boolean,
    default:true
  }
    
},{timestamps:true});


const Admin = mongoose.model('Hods',AdminSchema)

module.exports = Admin;