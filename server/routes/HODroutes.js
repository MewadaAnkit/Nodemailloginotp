const express = require("express");
const router = new express.Router();
const HOD = require('../Modal/HOD')
const User = require('../Modal/Student')
const jwt = require('jsonwebtoken')
const verifyHod= require('../middleware/verifyHod')
router.post('/api/login',async(req,res)=>{
   
  
    try {
        const user = await HOD.findOne({email:req.body.email})
        const UserResponse = {
          user:user._id  , 
          email:user.email ,
           isHod:user.isHod , 
           Branch:user.Branch
        }
       // const isPassoword = await HOD.findOne({Password:Password})
        if ( user) {
           
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
            res.cookie("access-token", token, {
              httpOnly: true,
              sameSite: "None"
           }).status(200).json({UserResponse});
        } else {
            res.status(401).json({ message: 'Invalid login credentials' });
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/api/hod/register',(req,res)=>{
  
    const { email , Branch, Password , mobile,Gender,isHod}  = req.body;
      
    try {
       const savedUser = new HOD({
          email,
          Branch,
          mobile,
          Gender,
          isHod,
          Password
        
       });
    
       savedUser.save();
    
       res.status(200).json('Registered Successfully')
    } catch (err) {
       res.status(500).json(err)
    }
})
router.get('/api/NewRegistrationRequests' , async(req,res)=>{
  
    const { Branch } = req.query;

    try {
     
        const branchRegex = new RegExp(Branch.split(/\s+/).map(term => `(?=.*${term})`).join(''), 'i');
      console.log(branchRegex)
      const students = await User.find({
        courseBranch: branchRegex,
     
      });
      const approvedStudents = students.filter(student => student.isApproved === false);
   // console.log(approvedStudents)
      res.status(200).json({ students:approvedStudents });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
})


//Put Request 

router.put('/api/approve', async(req, res) => {
    const hodId = req.body.hodId
    const studentId = req.body.studentId;
    //console.log('chale raha ' , hodId , studentId)
    try {
      const hod = await HOD.findById(hodId);
    //  console.log(hod)
      if (!hod) {
        return res.status(404).json({ error: 'HOD not found' });
      }
  
      if (!hod.isHod) {
        return res.status(403).json({ error: 'Unauthorized access' });
      }
  
      const student = await User.findById(studentId);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      if (student.isApproved) {
        return res.status(400).json({ error: 'Student is already approved' });
      }
  
       
      student.isApproved = true;
      await student.save();
  
      res.json({ message: 'Student approved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




module.exports = router;