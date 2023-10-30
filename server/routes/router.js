const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const User = require('../Modal/Student')
const uuid = require('uuid')
const Course = require('../Modal/Courses')
const Eligibility = require('../Modal/Eligibility.js');
const otpStorage = new Map();
const jwt = require('jsonwebtoken')

router.post('/send-otp', async (req, res) => {
   const { email, otp } = req.body;

   try {
      const emailverified = await User.findOne({ email: email })
      if (emailverified) {
         res.status(400).json('This email is already exists')
      }
      else {
         if (!otp) {
            // G
            const generatedOTP = generateOTP();
            sendEmail(email, `Your OTP: ${generatedOTP}`);
            console.log(generateOTP, "generateotp")

            // Store the OTP with its expiration time (e.g., 5 minutes)
            const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutes
            otpStorage.set(email, { otp: generatedOTP, expirationTime });

            res.status(201).json({ status: 201, message: 'OTP sent' });
         } else {
            // Verify the provided OTP
            const isOTPValid = verifyOTP(email, otp);
            console.log(isOTPValid, 'isotpvalid')

            if (isOTPValid) {
               console.log('Email sent successfully');
               res.status(200).json({ status: 200, message: 'Email sent successfully' });
            } else {
               console.log('Invalid OTP');
               res.status(401).json({ status: 401, message: 'Invalid OTP' });
            }
         }
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: 'Server error' });
   }
});

function generateOTP() {
   // Generate a random 6-digit OTP
   return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendEmail(email, content) {
   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD,
      },
   });

   const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Confirmation",
      text: `Your OTP: ${content}`,
   };
   return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            console.error("Error:", error);
            reject(error);
         } else {
            console.log("Email sent:", info.response);
            resolve(info.response);
         }
      });
   });
}
function verifyOTP(email, enteredOTP) {
   const storedOTPData = otpStorage.get(email);

   if (storedOTPData && Date.now() < storedOTPData.expirationTime) {
      return enteredOTP === storedOTPData.otp;
   }

   return false;
}

router.post('/verify-otp', (req, res) => {
   const { email, otp } = req.body;
   console.log(email)
   try {
      const isOTPValid = verifyOTP(email, otp);
      console.log(otp)
      if (isOTPValid) {
         res.status(200).json({ status: 201, message: 'OTP verified successfully' });
      } else {
         res.status(401).json({ status: 401, message: 'Invalid OTP' });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: 'Server error' });
   }
});
function generateRandomNumberid(length) {
   return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}

 async function sendIdPass(randomId , randomPassword , email , name){
   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD,
      },
   });

   const mailOptions = {
      from:process.env.EMAIL,
      to: email,
      subject: "Registration Successfull",
      text: `Hello ${name} , Your Registration  has been confirmed with Sri Satya Sai University of Technology and Medical Sciences, Sehore , Your Registration No is ${randomId} and password is <b>${randomPassword}`,
   };
   return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            console.error("Error:", error);
            reject(error);
         } else {
            console.log("Email sent:", info.response);
            resolve(info.response);
         }
      });
   });
}
router.post('/register', (req, res) => {
   const randomId = generateRandomNumberid(9); // Generates a random UUID
   const randomPassword = generateRandomNumberid(8);
   const { email , name , dob}  = req.body;
     
   try {
      const savedUser = new User({
         email,
         name ,
         dob,
         randomId,
         randomPassword
       
      });
   
      savedUser.save();
      sendIdPass(randomId , randomPassword, email , name)
      res.status(200).json('Registered Successfully')
   } catch (err) {
      res.status(500).json(err)
   }
})

router.post('/login',async(req,res)=>{
 
      const { randomId, randomPassword } = req.body;
      try {
         const user = await User.findOne({ randomId: randomId , randomPassword:randomPassword });
         if (user) {
           
             const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
             res.cookie("access-token", token, {
               httpOnly: true,
            }).status(200).json({ message: 'Login successful', user:user._id , username:user.name , email:user.email , dob:user.dob});
         } else {
             res.status(401).json({ message: 'Invalid login credentials' });
         }
     } catch (err) {
         res.status(500).json({ message: 'Something went wrong' });
         console.error(err);
     }
})

//Register Updates
router.put('/registerupdates',async(req,res)=>{
     const {CourseName , CourseType ,CourseBranch} = req.body
     try{
        const updatedStudent = await User.findByIdAndUpdate({$set:req.body},{new:true})
        res.status(200).json(updatedStudent)
     }catch(err){
       res.status(500).json('Something Went Wrong!')
       console.log(err)
     }
})

//Course Routes
router.post('/course',(req,res)=>{
    try{
       const savedCourse = new Course({
         ...req.body
       })
       savedCourse.save();
       res.status(200).json('courses saved successfully')

    }catch(err){
       res.json(err)
    }

})
//Eligibility Routes
router.post('/eligible',(req,res)=>{
   try{
      const savedEligibility = new Eligibility({
        ...req.body
      })
      savedEligibility.save();
      res.status(200).json('Eligibility saved successfully')

   }catch(err){
      res.json(err)
   }

})







module.exports = router;



