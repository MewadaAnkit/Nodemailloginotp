// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';

// function Home() {
//     const [email, setEmail] = useState("");
//     const [show, setShow] = useState(false);


//     const sendEmail = async (e) => {
//         e.preventDefault()
//         const res = await fetch("/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }, body: JSON.stringify({
//                 email
//             })
//         });
//         const data = await res.json();
//         if (data.status === 401 || !data) {
//             console.log("erroe")
//         } else {
//             console.log("Email sent");
//             setShow(true);
//             setEmail("")
//         }
//     }
//     return (
//         <>
//             {
//                 show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
//                     Email Sent Succesfully
//                 </Alert> : ""

//             }
//             <div className='container mt-5'>
//                 <div className='d-flex justify-content-center'>
//                     <h2>Send Email With React Through Nodmailer </h2>
//                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF6QcPZSdwWLIRXFbx9qqyDNUVXA9xxfoX6eJc2Fdx7QSngh31UWY-iXuCq4-gfPMiVY&usqp=CAU' className='mx-3'
//                         style={{ height: "35px" }} />
//                 </div>
//                 <div className=''>
//                     <Form className='mt-2 col-lg-6'>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Enter  Your Email</Form.Label>
//                             <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                             </Form.Text>
//                         </Form.Group>

//                         <Button variant="primary" type="submit" onClick={sendEmail}>
//                             Submit
//                         </Button>
//                     </Form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home

/////////isme otp aa rh bs input nhi open ho rhh/////

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';

// function Home() {
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [show, setShow] = useState(false);
//     const [otpSent, setOtpSent] = useState(false)

//     // Use useRef to reference the OTP input field
//     // const otpInputRef = useRef(null);

//     const sendEmail = async (e) => {
//         e.preventDefault();

//         const res = await fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 otp, // Include OTP in the request
//             }),
//         });

//         const data = await res.json();

//         if (data.status === 200) {
//             setShow(true);
//             setEmail('');
//             setOtp('');
//             setOtpSent(true); // Set OTP sent to true to render the OTP input
//             // setTimeout(() => {
//             //     otpInputRef.current.focus();
//             // }, 0);

//         } else if (data.status === 401) {
//             console.log('Invalid OTP');
//         } else {
//             console.log('Error:', data.message);
//         }
//     };
//     return (
//         <>
//             {show ? (
//                 <Alert variant="primary" onClose={() => setShow(false)} dismissible>
//                     Email Sent Successfully
//                 </Alert>
//             ) : null}

//             <div className="container mt-5">
//                 <div className="d-flex justify-content-center">
//                     <h2>Send Email With React Through NodeMailer</h2>
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF6QcPZSdwWLIRXFbx9qqyDNUVXA9xxfoX6eJc2Fdx7QSngh31UWY-iXuCq4-gfPMiVY&usqp=CAU"
//                         className="mx-3"
//                         style={{ height: '35px' }}
//                         alt="NodeMailer Logo"
//                     />
//                 </div>

//                 <div className="">
//                     <Form className="mt-2 col-lg-6">
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Enter Your Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Enter email"
//                             />
//                         </Form.Group>

//                         {otpSent ? (
//                             <>
//                                 <Form.Group className="mb-3" controlId="formBasicOTP">
//                                     <Form.Label>Enter OTP</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="otp"
//                                         value={otp}
//                                         onChange={(e) => setOtp(e.target.value)}
//                                         placeholder="Enter OTP"
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" type="submit" onClick={sendEmail}>
//                                     Verify OTP
//                                 </Button>
//                             </>
//                         ) : (
//                             <Button variant="primary" type="submit" onClick={sendEmail}>
//                                 Send OTP
//                             </Button>
//                         )}
//                     </Form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;


import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

function Home() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [show, setShow] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState('');

    const otpInputRef = useRef(null);

    const sendEmail = async (e) => {
        setOtpSent(true)
        e.preventDefault();

        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                otp,
            }),
        });

        const data = await res.json();

        if (data.status === 200) {
            setShow(true);
            setEmail('');
            setOtp('');
            setOtpSent(true);
            setVerificationMessage(''); // Reset the verification message
            otpInputRef.current.focus();
        } else if (data.status === 401) {
            setVerificationMessage('Invalid OTP');
        } else {
            console.log('Error:', data.message);
        }
    };

    return (
        <>
            {show ? (
                <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Email Sent Successfully
                </Alert>
            ) : null}

            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <h2>Send Email With React Through NodeMailer</h2>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF6QcPZSdwWLIRXFbx9qqyDNUVXA9xxfoX6eJc2Fdx7QSngh31UWY-iXuCq4-gfPMiVY&usqp=CAU"
                        className="mx-3"
                        style={{ height: '35px' }}
                        alt="NodeMailer Logo"
                    />
                </div>

                <div className="">
                    <Form className="mt-2 col-lg-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        {otpSent ? (
                            <Form.Group className="mb-3" controlId="formBasicOTP">
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                    ref={otpInputRef}
                                />
                            </Form.Group>
                        ) : (
                            <Button variant="primary" type="submit" onClick={sendEmail}>
                                Send OTP
                            </Button>
                        )}

                        {otpSent && (
                            <div className="mt-2">
                                <Button variant="primary" type="submit" onClick={sendEmail}>
                                    Verify OTP
                                </Button>
                            </div>
                        )}

                        {verificationMessage && (
                            <div className="mt-2">
                                <Alert variant={verificationMessage === 'Invalid OTP' ? 'danger' : 'success'}>
                                    {verificationMessage}
                                </Alert>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Home;


