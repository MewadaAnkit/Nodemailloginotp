// import React from 'react'
// import "./otp.css"

// const Otp = () => {
//     const handleSubmit = async () => {
//         const res = await fetch('/verify-otp', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 otp,
//             }),
//         });

//         const data = await res.json();

//         if (data.status === 201) {
           
      
//             /*  const registerRes = await fetch('http://localhost:7786/register', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({
//                       name,
//                       email,
//                     dob,
//                   }),
//               });
      
//               const registerData = await registerRes.json();
//                console.log(registerData)
      
//               if (registerData.status === 200) {
//                   // `console.log('ye chal raha hai ')
//                   setVerificationMessage('User registered successfully');
      
//               } else if (registerData.status === 401) {
//                  console.log('else wala')
//                  setVerificationMessage('This email is already registered');
//               } */

//         } else if (data.status === 401) {
//             setVerificationMessage('Invalid OTP');
//         } else {
//             console.log('Error:', data.message);
//         }


//     }
//     return (
//         <>
//             <div>
//                 <div className="wrapper">
//                     <div className="logo">
//                         {/* <img
//   src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
//   alt=""
// /> */}
//                     </div>
//                     <div className="text-center mt-4 name">OTP Verify</div>
//                     <form className="p-3 mt-3">
//                         <div className="form-field d-flex align-items-center">
//                             <span className="far fa-user" />
//                             <input type="text" name="OTP" id="OTP" placeholder="Enter OTP" />
//                         </div>
//                         <div className="form-field d-flex align-items-center">
//                             <span className="fas fa-key" />
//                             <input type="password" name="password" id="pwd" placeholder="Password" />
//                         </div>
//                         <button className="btn mt-3">Login</button>
//                     </form>
//                     <div className="text-center fs-6">
//                         <a href="#">Forget password?</a> or <a href="#">Sign up</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Otp
