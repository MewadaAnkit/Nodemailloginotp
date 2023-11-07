// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { Container } from "react-bootstrap";
// import { useFormik } from "formik";
// import swal from "sweetalert";
// import * as Yup from "yup";
// import {useNavigate} from 'react-router-dom'
// const RegistrationDetailed = ({
//   courseType,
//   courseName,
//   courseBranch,
//   eligibility,
 
// }) => {

//   const navigate = useNavigate()
//   const initialValues = {
//     candidateName: "",
//     fathersName: "",
//     mothersName: "",
//     gender: "",
//     domicile: "",
//     category: "",
//     lastExamType: "",
//     qualification: "",
//     passingYear: "",
//     qualificationPercentage: "",
//     nationality: "",
//     qualifyingEntranceExam: "",
//     entranceBasedType: "",
//     marks: "",
//     totalMarks: "",
//   };

//   const userData = JSON.parse(localStorage.getItem("currentUser"));
//   const name1 = userData.username;
//   const email1 = userData.email;
//   const dob1 = userData.dob;
//   const id = userData.user;
//   console.log(id, "djfksldjf");
//   function formatDate(inputDate) {
//     const date = new Date(inputDate);
//     const day = date.getDate().toString().padStart(2, "0"); // Format the day with leading zero
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1 and format with leading zero
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   }

//   const formattedDate = formatDate(dob1);

//   // Define the validation schema using Yup
//   const RegisterSchema = Yup.object().shape({
//     fathersname: Yup.string().required("Father's Name is required"),
//     mothersname: Yup.string().required("Mother's Name is required"),
//     gender: Yup.string().required("Gender is required"),
//     domicile: Yup.string().required("Domicile is required"),
//     category: Yup.string().required("Category is required"),
//     lastExamType: Yup.string().required(
//       "Last Exam Pass/Appear Type is required"
//     ),
//     qualification: Yup.string().required("Qualification is required"),
//     passingYear: Yup.string().required("Last Year Passing Year is required"),
//     qualificationPercentage: Yup.string().required(
//       "Qualifying Exam Percentage is required"
//     ),
//     nationality: Yup.string().required("Nationality is required"),
//     qualifyingEntranceExam: Yup.string().required(
//       "Qualifying Entrance Exam is required"
//     ),
//     entranceBasedType: Yup.string().required("Entrance Based Type is required"),
//   });

//   const { isValid, values, errors, handleChange, handleSubmit, touched } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: RegisterSchema,
//       onSubmit: (values) => {
//         if (isValid) {
//           console.log("Form is valid, proceeding with registration");
//           handleSubmit1();
//         }
//       },
//     });
//   useEffect(() => {
//     const calculatePercentage = () => {
//       const marks = parseFloat(values.marks);
//       const totalMarks = parseFloat(values.totalMarks);

//       if (!isNaN(marks) && !isNaN(totalMarks)) {
//         values.qualificationPercentage = ((marks / totalMarks) * 100).toFixed(
//           2
//         );
//       }
//     };

//     calculatePercentage();
//   }, [values.marks, values.totalMarks]);

//   const data = {
//     ...values,
//     courseType,
//     courseName,
//     courseBranch,
//     eligibility,
//     id,
//   };
//   console.log(data, "kuch to hai ");

//   const handleSubmit1 = async (e) => {
//     try {
//       const res = await fetch(`/registerupdates`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data), // Send the form values as JSON
//       });

//       if (res.ok) {
//         swal({
//           title: "Congratulations",
//           text: "Registration done successfully!",
//           icon: "success",
//           buttons: "OK",
//         });

       
//         navigate('/studentlogin')
//       } else {
//         console.log("Registration update failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const data1 = {
//     candidateName: values.candidateName,
//     fathersName: values.fathersName,

//     mothersName: values.mothersName,

//     gender: values.gender,
//     mobile: values.mobile,
//     domicile: values.domicile,

//     category: values.category,
//     lastExamType: values.lastExamType,
//     qualification: values.qualification,
//     passingYear: values.passingYear,
//     qualificationPercentage: values.qualificationPercentage,
//     nationality: values.nationality,
//     qualifyingEntranceExam: values.qualifyingEntranceExam,
//     entranceBasedType: values.entranceBasedType,
//   };
  

//   return (
//     <>
//       <Container
//         className="shadow p-3 mb-3 bg-body rounded"
//         style={{ width: "100%", backgroundColor: "#e8e5d1", marginTop: "20px" }}
//       >
//         <div style={{ backgroundColor: "skyblue" }}>
//           <h5 style={{ padding: "10px" }}>
//             <b>Registration Details</b>
//           </h5>
//           <hr></hr>
//         </div>
//         <div style={{ overflow: "hidden" }}>
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="candidateName">
//                   <Form.Label>
//                     <b>Candidate Name*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="candidateName"
//                     disabled="true"
//                     required
//                     value={name1}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="fathersName">
//                   <Form.Label>
//                     <b>Father's Name*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoComplete="off"
//                     name="fathersName"
//                     value={values.fathersName}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 {errors.fathersName && touched.fathersName ? (
//                   <p className="error">{errors.fathersName}</p>
//                 ) : null}
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="mothersName">
//                   <Form.Label>
//                     <b>Mother's Name</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="mothersName"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={values.mothersName}
//                   />
//                   {errors.mothersName && touched.mothersName ? (
//                     <p className="error">{errors.mothersName}</p>
//                   ) : null}
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="gender">
//                   <Form.Label>
//                     <b>Gender*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="gender"
//                     autoComplete="off"
//                     value={values.gender} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     {errors.gender && touched.gender ? (
//                       <p className="error">{errors.gender}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="email">
//                   <Form.Label>
//                     <b>Email*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     autoComplete="off"
//                     disabled="true"
//                     required
//                     value={email1}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="mobile">
//                   <Form.Label>
//                     <b>Mobile*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="mobile"
//                     required
//                     disabled="true"
//                     autoComplete="off"
//                     value={}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="dateOfBirth">
//                   <Form.Label>
//                     <b>Date of Birth*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="dateOfBirth"
//                     autoComplete="off"
//                     disabled="true"
//                     value={formattedDate}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="domicile">
//                   <Form.Label>
//                     <b>Domicile*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="domicile"
//                     autoComplete="off"
//                     value={values.domicile} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="MP">MP</option>
//                     <option value="ALL INDIA">ALL INDIA</option>
//                     {errors.domicile && touched.domicile ? (
//                       <p className="error">{errors.domicile}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="category">
//                   <Form.Label>
//                     <b>Category*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="category"
//                     autoComplete="off"
//                     value={values.category} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="1">Select Category</option>
//                     <option value="Gen">Gen</option>
//                     <option value="SC/ST">SC/ST</option>
//                     <option value="OBC">OBC</option>
//                     {errors.category && touched.category ? (
//                       <p className="error">{errors.category}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="lastExamType">
//                   <Form.Label>
//                     <b>Last Exam Pass/Appear Type*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="lastExamType"
//                     autoComplete="off"
//                     value={values.lastExamType} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="1">Select</option>
//                     <option value="Regular">Regular</option>
//                     <option value="Private">Private</option>
//                     {errors.lastExamType && touched.lastExamType ? (
//                       <p className="error">{errors.lastExamType}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="qualification">
//                   <Form.Label>
//                     <b>Qualification*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="qualification"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={values.qualification}
//                   />
//                   {/* <Form.Check type="checkbox" label="Is appear" /> */}
//                   {errors.qualification && touched.qualification ? (
//                     <p className="error">{errors.qualification}</p>
//                   ) : null}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="passingYear">
//                   <Form.Label>
//                     <b>Last Year Passing Year*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="passingYear"
//                     autoComplete="off"
//                     value={values.passingYear} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="1">Select passing year</option>
//                     <option value="2023">2023</option>
//                     <option value="2022">2022</option>
//                     <option value="2021">2021</option>
//                     {errors.passingYear && touched.passingYear ? (
//                       <p className="error">{errors.passingYear}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>
//             {/* Include the rest of your form fields in a similar manner */}
//             {/* <Row>
//               <Col md={4}>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="qualificationPercentage"
//                 >
//                   <Form.Label>
//                     <b>Qualifying Exam Percentage*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="qualificationPercentage"
//                     value={values.qualificationPercentage}
//                     onChange={handleChange}
//                   />
//                   {errors.qualificationPercentage &&
//                   touched.qualificationPercentage ? (
//                     <p className="error">{errors.qualificationPercentage}</p>
//                   ) : null}
//                 </Form.Group>
//               </Col>

//               <Col md={4} style={{ marginTop: "30px" }}>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="qualificationPercentage"
//                 >
//                   <Form.Control
//                     type="text"
//                     name="qualificationPercentage"
//                     value={values.qualificationPercentage}
//                     onChange={handleChange}
//                   />
//                   {errors.qualificationPercentage &&
//                   touched.qualificationPercentage ? (
//                     <p className="error">{errors.qualificationPercentage}</p>
//                   ) : null}
//                 </Form.Group>
//               </Col>

//               <Col md={4} style={{ marginTop: "30px" }}>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="qualificationPercentage"
//                 >
//                   <Form.Control
//                     type="text"
//                     value={values.qualificationPercentage}
//                     onChange={handleChange}
//                     name="qualificationPercentage"
//                   />
//                   {errors.qualificationPercentage &&
//                   touched.qualificationPercentage ? (
//                     <p className="error">{errors.qualificationPercentage}</p>
//                   ) : null}
//                 </Form.Group>
//               </Col>
//             </Row> */}

//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="marks">
//                   <Form.Label>
//                     <b>Marks*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="marks"
//                     autoComplete="off"
//                     value={values.marks}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="totalMarks">
//                   <Form.Label>
//                     <b>Total Marks*</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="totalMarks"
//                     autoComplete="off"
//                     value={values.totalMarks}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="qualificationPercentage"
//                 >
//                   <Form.Label>
//                     <b>Qualifying Exam Percentage</b>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="qualificationPercentage"
//                     autoComplete="off"
//                     value={
//                       values.marks && values.totalMarks
//                       ? `${((values.marks / values.totalMarks) * 100).toFixed(2)}%`
//                         : ""
//                     }
//                     disabled
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="nationality">
//                   <Form.Label>
//                     <b>Nationality*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="nationality"
//                     autoComplete="off"
//                     value={values.nationality}
//                     onChange={handleChange}
//                   >
//                     <option value="1">Select Nationality</option>
//                     <option value="india">Indian</option>
//                     {errors.nationality && touched.nationality ? (
//                       <p className="error">{errors.nationality}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="qualifyingEntranceExam">
//                   <Form.Label>
//                     <b>Qualifying Entrance Exam*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="qualifyingEntranceExam"
//                     autoComplete="off"
//                     value={values.qualifyingEntranceExam}
//                     onChange={handleChange}
//                   >
//                     <option value="1">select qualifyingEntranceExam</option>
//                     <option value="10th">10th</option>
//                     <option value="12th">12th</option>
//                     {errors.qualifyingEntranceExam &&
//                     touched.qualifyingEntranceExam ? (
//                       <p className="error">{errors.qualifyingEntranceExam}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>

//               <Col md={4}>
//                 <Form.Group className="mb-3" controlId="entranceBasedType">
//                   <Form.Label>
//                     <b>Entrance Based Type*</b>
//                   </Form.Label>
//                   <Form.Select
//                     aria-label="Default select example"
//                     name="entranceBasedType"
//                     autoComplete="off"
//                     value={values.entranceBasedType} // You should also set the value here
//                     onChange={handleChange}
//                   >
//                     <option value="1">Select Entrance Based Type</option>
//                     <option value="Gen">Gen</option>
//                     <option value="SC/ST">SC/ST</option>
//                     <option value="OBC">OBC</option>
//                     {errors.entranceBasedType && touched.entranceBasedType ? (
//                       <p className="error">{errors.entranceBasedType}</p>
//                     ) : null}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={12} style={{ marginLeft: "400px" }}>
//                 <Button variant="default" className="me-2">
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="success"
//                   type="submit"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleSubmit1();
//                   }}
//                 >
//                   Register Now
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default RegistrationDetailed;


import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import swal from "sweetalert";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterDetailed = ({
  courseType,
  courseName,
  courseBranch,
  eligibility,
}) => {
  const initialValues = {
    candidateName: "",
    fathersname: "",
    mothersname: "",
    gender: "",
    domicile: "",
    category: "",
    lastExamType: "",
    qualification: "",
    passingYear: "",
    qualificationPercentage: "",
    nationality: "",
    qualifyingEntranceExam: "",
    entranceBasedType: "",
    marks: "",
    totalMarks: "",
  };

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const name1 = userData.name;
  const email1 = userData.email;
  const fathername = userData.fathersname;
  const mothername = userData.mothersname;
  const mobile = userData.mobile;
  const dob1 = userData.dob;
  const id = userData.id;
  console.log(id, "djfksldjf");
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0"); // Format the day with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1 and format with leading zero
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const formattedDate = formatDate(dob1);

  // Define the validation schema using Yup
  const RegisterSchema = Yup.object().shape({
    fathersName: Yup.string().required("Father's Name is required"),
    mothersName: Yup.string().required("Mother's Name is required"),
    gender: Yup.string().required("Gender is required"),
    domicile: Yup.string().required("Domicile is required"),
    category: Yup.string().required("Category is required"),
    lastExamType: Yup.string().required(
      "Last Exam Pass/Appear Type is required"
    ),
    qualification: Yup.string().required("Qualification is required"),
    passingYear: Yup.string().required("Last Year Passing Year is required"),
    qualificationPercentage: Yup.string().required(
      "Qualifying Exam Percentage is required"
    ),
    nationality: Yup.string().required("Nationality is required"),
    qualifyingEntranceExam: Yup.string().required(
      "Qualifying Entrance Exam is required"
    ),
    entranceBasedType: Yup.string().required("Entrance Based Type is required"),
  });

  const { isValid, values, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
        if (isValid) {
          console.log("Form is valid, proceeding with registration");
          handleSubmit1();
        }
      },
    });
  useEffect(() => {
    const calculatePercentage = () => {
      const marks = parseFloat(values.marks);
      const totalMarks = parseFloat(values.totalMarks);

      if (!isNaN(marks) && !isNaN(totalMarks)) {
        values.qualificationPercentage = ((marks / totalMarks) * 100).toFixed(
          2
        );
      }
    };

    calculatePercentage();
  }, [values.marks, values.totalMarks]);

  const data = {
    ...values,
    courseType,
    courseName,
    courseBranch,
    eligibility,
    id,
  };
  console.log(data, "kuch to hai ");

  const handleSubmit1 = async (e) => {
    try {
      const res = await fetch(`/registerupdates`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the form values as JSON
      });

      if (res.ok) {
        swal({
          title: "Congratulations",
          text: "Registration done successfully!",
          icon: "success",
          buttons: "OK",
        });
        // navigate('/success')
      } else {
        console.log("Registration update failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const data1 = {
    candidateName: values.candidateName,
    fathersName: values.fathersName,

    mothersName: values.mothersName,

    gender: values.gender,
    mobile: values.mobile,
    domicile: values.domicile,

    category: values.category,
    lastExamType: values.lastExamType,
    qualification: values.qualification,
    passingYear: values.passingYear,
    qualificationPercentage: values.qualificationPercentage,
    nationality: values.nationality,
    qualifyingEntranceExam: values.qualifyingEntranceExam,
    entranceBasedType: values.entranceBasedType,
  };
  console.log(data1, "hole hole sajana");

  return (
    <>
      <Container
        className="shadow p-3 mb-3 bg-body rounded"
        style={{ width: "100%", backgroundColor: "#e8e5d1", marginTop: "20px" }}
      >
        <div style={{ backgroundColor: "skyblue" }}>
          <h5 style={{ padding: "10px" }}>
            <b>Registration Details</b>
          </h5>
          <hr></hr>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="candidateName">
                  <Form.Label>
                    <b>Candidate Name*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="candidateName"
                    disabled="true"
                    required
                    value={name1}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="fathersName">
                  <Form.Label>
                    <b>Father's Name*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    disabled="true"
                    name="fathersName"
                    value={fathername}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.fathersname && touched.fathersname ? (
                  <p className="error">{errors.fathersname}</p>
                ) : null}
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="mothersName">
                  <Form.Label>
                    <b>Mother's Name</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    disabled="true"
                    name="mothersName"
                    autoComplete="off"
                    onChange={handleChange}
                    value={mothername}
                  />
                  {errors.mothersname && touched.mothersname ? (
                    <p className="error">{errors.mothersname}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>
                    <b>Gender*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                    autoComplete="off"
                    value={values.gender} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {errors.gender && touched.gender ? (
                      <p className="error">{errors.gender}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <b>Email*</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    autoComplete="off"
                    disabled="true"
                    required
                    value={email1}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>
                    <b>Mobile*</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    disabled="true"
                    autoComplete="off"
                    value={mobile}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="dateOfBirth">
                  <Form.Label>
                    <b>Date of Birth*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="dateOfBirth"
                    autoComplete="off"
                    disabled="true"
                    value={formattedDate}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="domicile">
                  <Form.Label>
                    <b>Domicile*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="domicile"
                    autoComplete="off"
                    value={values.domicile} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="MP">MP</option>
                    <option value="ALL INDIA">ALL INDIA</option>
                    {errors.domicile && touched.domicile ? (
                      <p className="error">{errors.domicile}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>
                    <b>Category*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    autoComplete="off"
                    value={values.category} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select Category</option>
                    <option value="Gen">Gen</option>
                    <option value="SC/ST">SC/ST</option>
                    <option value="OBC">OBC</option>
                    {errors.category && touched.category ? (
                      <p className="error">{errors.category}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="lastExamType">
                  <Form.Label>
                    <b>Last Exam Pass/Appear Type*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="lastExamType"
                    autoComplete="off"
                    value={values.lastExamType} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select</option>
                    <option value="Regular">Regular</option>
                    <option value="Private">Private</option>
                    {errors.lastExamType && touched.lastExamType ? (
                      <p className="error">{errors.lastExamType}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="qualification">
                  <Form.Label>
                    <b>Qualification*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.qualification}
                  />
                  {/* <Form.Check type="checkbox" label="Is appear" /> */}
                  {errors.qualification && touched.qualification ? (
                    <p className="error">{errors.qualification}</p>
                  ) : null}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="passingYear">
                  <Form.Label>
                    <b>Last Year Passing Year*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="passingYear"
                    autoComplete="off"
                    value={values.passingYear} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select passing year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="1999">1999</option>
                    <option value="2021">1986</option>
                    {errors.passingYear && touched.passingYear ? (
                      <p className="error">{errors.passingYear}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            {/* Include the rest of your form fields in a similar manner */}
            {/* <Row>
              <Col md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="qualificationPercentage"
                >
                  <Form.Label>
                    <b>Qualifying Exam Percentage*</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualificationPercentage"
                    value={values.qualificationPercentage}
                    onChange={handleChange}
                  />
                  {errors.qualificationPercentage &&
                  touched.qualificationPercentage ? (
                    <p className="error">{errors.qualificationPercentage}</p>
                  ) : null}
                </Form.Group>
              </Col>

              <Col md={4} style={{ marginTop: "30px" }}>
                <Form.Group
                  className="mb-3"
                  controlId="qualificationPercentage"
                >
                  <Form.Control
                    type="text"
                    name="qualificationPercentage"
                    value={values.qualificationPercentage}
                    onChange={handleChange}
                  />
                  {errors.qualificationPercentage &&
                  touched.qualificationPercentage ? (
                    <p className="error">{errors.qualificationPercentage}</p>
                  ) : null}
                </Form.Group>
              </Col>

              <Col md={4} style={{ marginTop: "30px" }}>
                <Form.Group
                  className="mb-3"
                  controlId="qualificationPercentage"
                >
                  <Form.Control
                    type="text"
                    value={values.qualificationPercentage}
                    onChange={handleChange}
                    name="qualificationPercentage"
                  />
                  {errors.qualificationPercentage &&
                  touched.qualificationPercentage ? (
                    <p className="error">{errors.qualificationPercentage}</p>
                  ) : null}
                </Form.Group>
              </Col>
            </Row> */}

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="marks">
                  <Form.Label>
                    <b>Marks*</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="marks"
                    autoComplete="off"
                    value={values.marks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="totalMarks">
                  <Form.Label>
                    <b>Total Marks*</b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="totalMarks"
                    autoComplete="off"
                    value={values.totalMarks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="qualificationPercentage"
                >
                  <Form.Label>
                    <b>Qualifying Exam Percentage</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualificationPercentage"
                    autoComplete="off"
                    value={
                      values.marks && values.totalMarks
                        ? `${((values.marks / values.totalMarks) * 100).toFixed(
                            2
                          )}%`
                        : ""
                    }
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="nationality">
                  <Form.Label>
                    <b>Nationality*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="nationality"
                    autoComplete="off"
                    value={values.nationality}
                    onChange={handleChange}
                  >
                    <option value="1">Select Nationality</option>
                    <option value="india">Indian</option>
                    {errors.nationality && touched.nationality ? (
                      <p className="error">{errors.nationality}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="qualifyingEntranceExam">
                  <Form.Label>
                    <b>Qualifying Entrance Exam*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="qualifyingEntranceExam"
                    autoComplete="off"
                    value={values.qualifyingEntranceExam}
                    onChange={handleChange}
                  >
                    <option value="1">select qualifyingEntranceExam</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    {errors.qualifyingEntranceExam &&
                    touched.qualifyingEntranceExam ? (
                      <p className="error">{errors.qualifyingEntranceExam}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="entranceBasedType">
                  <Form.Label>
                    <b>Entrance Based Type*</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="entranceBasedType"
                    autoComplete="off"
                    value={values.entranceBasedType} // You should also set the value here
                    onChange={handleChange}
                  >
                    <option value="1">Select Entrance Based Type</option>
                    <option value="Gen">Gen</option>
                    <option value="SC/ST">SC/ST</option>
                    <option value="OBC">OBC</option>
                    {errors.entranceBasedType && touched.entranceBasedType ? (
                      <p className="error">{errors.entranceBasedType}</p>
                    ) : null}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{ marginLeft: "400px" }}>
                <Button variant="default" className="me-2">
                  Cancel
                </Button>
                <Button
                  variant="success"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit1();
                  }}
                >
                  Register Now
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RegisterDetailed;