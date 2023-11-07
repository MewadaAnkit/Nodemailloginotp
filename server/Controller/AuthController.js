const mongoose = require('mongoose')
const nodemailer = require("nodemailer");
const User = require('../Modal/Student')
const jwt = require('jsonwebtoken')


function generateOTP() {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
 }
const SendOtp = async (req,res)=>{
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
}

const VerifyOtp = async(req,res)=>{
    
}



module.exports = { SendOtp}