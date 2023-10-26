
/*import React, { useState, useRef } from 'react';
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
        e.preventDefault();
        setVerificationMessage(''); // Reset the verification message

        if (!otpSent) {
            // Send OTP logic
            const res = await fetch('http://localhost:7786/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await res.json();

            if (data.status === 200) {
                setShow(true);
                setOtpSent(true);
                setVerificationMessage('OTP sent successfully');
                otpInputRef.current.focus();
            } else {
                console.log('Error:', data.message);
            }
        } else {
            // Verify OTP logic
            const res = await fetch('/verify-otp', {
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
                setVerificationMessage('OTP verified successfully');
            } else if (data.status === 401) {
                setVerificationMessage('Invalid OTP');
            } else {
                console.log('Error:', data.message);
            }
        }
    };

    return (
        <>
            {show ? (
                <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    {otpSent ? 'OTP Sent Successfully' : 'Email Sent Successfully'}
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

export default Home;*/
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
        e.preventDefault();
        setVerificationMessage(''); // Reset the verification message

        if (!otpSent) {
            // Send OTP logic
            const res = await fetch('http://localhost:7786/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await res.json();

            if (data.status === 201) {
                setShow(true);
                setOtpSent(true);
                setVerificationMessage('OTP sent successfully');
                otpInputRef.current.focus();
            } else {
                console.log('Error:', data.message);
            }
        }else{
            const res = await fetch('/verify-otp', {
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

            if (data.status === 201) {
                setVerificationMessage('OTP verified successfully');
            } else if (data.status === 401) {
                setVerificationMessage('Invalid OTP');
            } else {
                console.log('Error:', data.message);
            }
        }
        
    };

    return (
        <>
            {show ? (
                <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    {otpSent ? 'OTP Sent Successfully' : 'Email Sent Successfully'}
                </Alert>
            ) : null}

            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <h2>Send Email With React Through NodeMailer</h2>
                  
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

                        {otpSent && (
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
                        )}

                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            {otpSent ? 'Verify OTP' : 'Send OTP'}
                        </Button>

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




