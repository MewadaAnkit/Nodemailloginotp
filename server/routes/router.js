// const express = require("express");
// const router = new express.Router();
// const nodemailer = require("nodemailer");


// router.post("/register", (req, res) => {
//    const { email } = req.body;

//    try {
//       const transporter = nodemailer.createTransport({
//          service: "gmail",
//          auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD

//          }
//       });

//       const mailOption = {
//          from: process.env.EMAIL,
//          to: email,
//          subject: "Sending Email With React",
//          html: "<h1>CONGRAGULATION you Successfully Send Email</h1>"
//       }

//       transporter.sendMail(mailOption, (error, info) => {
//          if (error) {
//             console.log("Error", error)
//          }
//          else {
//             console.log("Email sent" + info.response);
//             res.status(201).json({ status: 201, info })
//          }
//       })
//    } catch (error) {
//       res.status(201).json({ status: 401, error })
//    }
// });

// module.exports = router

const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

const otpStorage = new Map();

router.post('/register', async (req, res) => {
   const { email, otp } = req.body;

   try {
      if (!otp) {
         // Generate and send an OTP
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

module.exports = router;



