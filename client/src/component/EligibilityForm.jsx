import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import firebase from "./firebase";
import { Input } from "@chakra-ui/react";
// import "./Eligbility.css";
import swal from "sweetalert";
import RegistrationDetailed from "./RegistrationDetailed";

const EligibilityForm = ({
  eligible,
  eligibilityGradPer,
  courseType,
  courseName,
  courseBranch,
}) => {
  const [otp, setOtp] = useState("");

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    showRegistrationForm: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("Recaptcha verified");
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + formData.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        setShowOtpInput(true);

        swal({
          title: "OTP Sent Successfully",
          text: `OTP sent your Mobile No.  ${formData.mobile} please enter otp!!!! `,
          icon: "success",
          showConfirmButton: false,
          timer: 10000,
        });
      })
      .catch((error) => {
        console.log("SMS not sent");
      });
  };
  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = formData.otp;
    console.log(code, "submit");

    if (window.confirmationResult && code) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          const user = result.user;
          console.log(JSON.stringify(user));
          if (result.success) {
            swal({
              title: "Congratulations",
              text: "Registration done successfullly!",
              icon: "success",
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                alert("confirmed");
              }
            });
          } else {
            console.log("Registration update failed");
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error confirming OTP:", error);
          swal({
            title: "ERROR",
            text: "Error confirming OTP. Please try again.",
            icon: "ERROR",
            showConfirmButton: true,
          });
        });
    } else {
      console.error("Confirmation result or OTP code is missing.");
    }
  };
  const openRegistrationForm = () => {
    // Function to show the RegistrationDetailed form
    setFormData({
      ...formData,
      showRegistrationForm: true,
    });
  };

  return (
    <>
      <Container
        fluid
        className="container-overflow shadow p-5  mb-9 bg-body rounded"
        style={{ maxWidth: "88%", margin: "50px auto" }}
      >
        <h4 className="text-center" style={{ background: "skyblue" }}>
          Eligibility
        </h4>
        <Table responsive>
          <tbody>
            <tr>
              <td>Eligibility</td>
              <td>:</td>
              <td style={{ color: "orange" }}>{eligible.eligibility}</td>
            </tr>
            <tr>
              <td>Eligibility %</td>
              <td>:</td>
              <td>
                <Row className="equal-width-boxes">
                  <Col xs={6} md={2}>
                    General: {eligibilityGradPer.gen}
                  </Col>
                  <Col xs={6} md={2}>
                    SC: {eligibilityGradPer.sc}
                  </Col>
                  <Col xs={6} md={2}>
                    ST: {eligibilityGradPer.st}
                  </Col>
                  <Col xs={6} md={2}>
                    OBC: {eligibilityGradPer.obc}
                  </Col>
                  <Col xs={6} md={2}>
                    PH: {eligibilityGradPer.ph}
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className="form-input">
          <Col xs={12} md={6}>
            <form onSubmit={onSignInSubmit}>
              <div id="sign-in-button"></div>
              <Input
                style={{ marginTop: "8px" }}
                type="number"
                name="mobile"
                placeholder="Mobile No."
                required
                value={formData.mobile}
                onChange={handleChange}
              />
              <Button style={{ marginTop: "8px" }} type="submit">
                Send OTP
              </Button>
            </form>
          </Col>
          {showOtpInput && (
            <Col xs={12} md={6}>
              <form onSubmit={onSubmitOTP}>
                <Input
                  style={{ marginTop: "8px" }}
                  type="number"
                  name="otp"
                  placeholder="OTP No."
                  required
                  value={formData.otp}
                  onChange={handleChange}
                />
                <Button style={{ marginTop: "8px" }} type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          )}
        </Row>
      </Container>
      {formData.showRegistrationForm ? (
        <RegistrationDetailed
          courseType={courseType}
          courseName={courseName}
          courseBranch={courseBranch}
          eligibility={eligible}
          mobile={formData.mobile}
        />
      ) : (
        <Button
          style={{ margin: "30px auto", display: "block" }}
          variant="outline-secondary"
          onClick={openRegistrationForm}
        >
          Continue
        </Button>
      )}
    </>
  );
};
{
  /* <form onSubmit={onSignInSubmit}>
            <div id="sign-in-button"></div>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile No."
              required
              onChange={handleChange}
            />
            <button type="submit">Send otp</button>
          </form> */
}

{
  /* <form onSubmit={onSubmitOTP}>
            <input
              type="number"
              name="otp"
              placeholder="OTP No."
              required
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
       */
}

{
  /* {formData.showRegistrationForm ? (
        <RegistrationDetailed />
      ) : (
        <Button
          style={{ margin: "30px auto", display: "block" }}
          variant="outline-secondary"
          onClick={openRegistrationForm}
        >
          Continue
        </Button>
      )} */
}

export default EligibilityForm;