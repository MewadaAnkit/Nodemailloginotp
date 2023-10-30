const mongoose = require('mongoose')

mongoose.connect(process.env.DB,{

}).then(()=>{
    console.log('Connected successfully')
}).catch((err)=>console.log(err))


module.exports = require;

