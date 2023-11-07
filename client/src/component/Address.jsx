// // import React, { useState, useEffect } from "react";
// // import Button from "react-bootstrap/Button";
// // import Col from "react-bootstrap/Col";
// // import Form from "react-bootstrap/Form";
// // import Row from "react-bootstrap/Row";
// // import { Container } from "react-bootstrap";
// // import AddressSchema from "./AddressSchema";
// // import { useFormik } from "formik";
// // import { State, City } from 'country-state-city'
// // import Sidebarr from './Sidebarr';
// // import Buttonfun from "./ButtonFun";
// // import { ThemeProvider, createTheme } from '@mui/material/styles';
// // import axios from 'axios'
// // const theme = createTheme();

// // const initialValues = {
// //   address1: "",
// //   address2: "",
// //   country: "",
// //   state: "",
// //   district: "",
// //   pinCode: "",

// //   address11: "",
// //   address22: "",
// //   country1: "",
// //   state1: "",
// //   district1: "",
// //   pinCode1: "",
// // };

// // const Address = () => {
// //   const { values, errors, handleChange, handleSubmit, touched } = useFormik({
// //     initialValues: initialValues,
// //     validationSchema: AddressSchema,
// //     onSubmit: (values) => {
// //       console.log("hii", values);
// //     },
// //   });

// //   const data = {
// //     address1: values.address1,
// //     address2: values.address2,
// //     country: values.country,
// //     state: values.state,
// //     district: values.district,
// //     pinCode: values.pinCode,

// //     address11: values.address11,
// //     address22: values.address22,
// //     country1: values.country1,
// //     state1: values.state1,
// //     district1: values.district1,
// //     pinCode1: values.pinCode1,
// //   };




// //   //---------------------------------------------------------  Country State City  ------------------------------------------------------------

// //   const [states, setStates] = useState([]);
// //   const [cities, setCities] = useState([]);

// //   useEffect(() => {

// //     const getAllStates = async () => {
// //       try {
// //         const states = await State.getStatesOfCountry('IN'); // 'IN' is the country code for India
// //         setStates(states);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     getAllStates();
// //   }, []);

// //   const userData = JSON.parse(localStorage.getItem("currentUser"));
// //   const studentId = userData.user;
// //   const data1 = {
// //     ...values,
// //     studentId
// //   }
// //   console.log(data1, "dariya ")
// //   // const handleSubmit1 = async () => {

// //   //   try {

// //   //     const response = await axios.put('http://localhost:7786/api/update/address', data1);
// //   //     console.log(response.data); 
// //   //     if(response.ok){
// //   //       alert('Professional Details updates')

// //   //     }

// //   //   } catch (error) {
// //   //     console.error('Error updating professional data:', error);
// //   //   }
// //   // };

// //   const handleSubmit1 = async () => {
// //     try {
// //       const response = await axios.put('http://localhost:7786/api/update/address', data1);
// //       console.log(response.data);
// //       if (response.status === 200) {
// //         alert('Address details updated');
// //       } else {
// //         alert('Failed to update address details');
// //       }
// //     } catch (error) {
// //       console.error('Error updating address data:', error);
// //       // Handle error state or show an error message to the user
// //     }
// //   };


//   // const handleStateChange = (e) => {
//   //   const selectedState = e.target.value;
//   //   // setData({ ...data, state: selectedState });

//   //   if (selectedState) {
//   //     const countryCode = 'IN';
//   //     try {
//   //       const stateCities = City.getCitiesOfState(countryCode, selectedState);
//   //       setCities(stateCities);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   } else {

//   //     setCities([]);
//   //   }
//   // };
// //   return (
//     // <>
//     //   <ThemeProvider theme={theme}>
//     //     <Sidebarr />
//     //     <Buttonfun />
//     //     <Container
//     //       fluid
//     //       className="shadow p-3 mb-3 bg-body rounded"
//     //       style={{ backgroundColor: "#e8e5d1", marginTop: "20px", marginLeft: '250px', width: '80%' }}
//     //     >
//     //       <div style={{ display: "flex", gap: '20px' }}>
//     //         <div style={{ overflow: "hidden" }}>
//     //           <div
//     //             style={{
//     //               backgroundColor: "skyblue",
//     //               width: "600px",
//     //               borderRadius: "10px",
//     //             }}
//     //           >
//     //             <h5 style={{ padding: "10px", margin: 0, marginTop: '-3px' }}>Current Address</h5>
//     //             {/* <hr></hr> */}
//     //           </div>
//     //           <br></br>
//     //           <Form>
//     //             <Row>
//     //               <Col md={6} width="300px">
//     //                 <Form.Group className="mb-3" controlId="address1">
//     //                   <Form.Label>
//     //                     <b>Address1*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="address1"
//     //                     required
//     //                     placeholder="House No, Street No or Road No"
//     //                     value={values.address1}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.address1 && touched.address1 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.address1}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>

//     //               <Col md={6} width="300px">
//     //                 <Form.Group className="mb-3" controlId="Address2">
//     //                   <Form.Label>
//     //                     <b>Address2*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="address2"
//     //                     required
//     //                     placeholder="Colony, Ward, Village, City"
//     //                     value={values.address2}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.address2 && touched.address2 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.address2}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>
//     //             <Row>
//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="Country">
//     //                   <Form.Label>
//     //                     <b>Country*</b>
//     //                   </Form.Label>
//     //                   <Form.Select
//     //                     aria-label="Default select example"
//     //                     name="country"
//     //                     value={values.country}
//     //                   >
//     //                     <option value="India">India</option>
//     //                     <option value="Russia">Russia</option>
//     //                     <option value="Pakistan">Pakistan</option>
//     //                     {errors.country && touched.country ? (
//     //                       <p className="error">{errors.country}</p>
//     //                     ) : null}
//     //                   </Form.Select>
//     //                 </Form.Group>
//     //               </Col>

//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="State">
//     //                   <Form.Label>
//     //                     <b>State*</b>
//     //                   </Form.Label>
//     //                   {/* <Form.Control
//     //                   type="text"
//     //                   name="State"
//     //                   required
//     //                   value={values.State}
//     //                   onChange={handleChange}
//     //                 /> */}

//     //                   <select
//     //                     className="form-select"
//     //                     id="inputState"
//     //                     value={values.state}  // Bind the value to the form field
//     //                     onChange={handleChange} // Handle change event with handleChange function
//     //                   >
//     //                     <option value="">Select state</option>
//     //                     {states.map((item, index) => (
//     //                       <option key={index} value={item.isoCode}>
//     //                         {item.name}
//     //                       </option>
//     //                     ))}
//     //                   </select>

//     //                 </Form.Group>
//     //                 {errors.state && touched.state ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.state}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>

//     //             <Row>
//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="District">
//     //                   <Form.Label>
//     //                     <b>District*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="district"
//     //                     required
//     //                     value={values.district}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.district && touched.district ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.district}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>

//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="PinCode">
//     //                   <Form.Label>
//     //                     <b>Pin COde*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="pinCode"
//     //                     required
//     //                     value={values.pinCode}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.pinCode && touched.pinCode ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.pinCode}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>
//     //           </Form>
//     //         </div>

//     //         <div style={{ overflow: "hidden" }}>
//     //           <div
//     //             style={{
//     //               backgroundColor: "skyblue",
//     //               width: "600px",
//     //               borderRadius: "10px",
//     //             }}
//     //           >
//     //             {/* <h5 style={{ padding: "10px" }}>
//     //         <Form.Check type="checkbox" /> Select if Permanent Address is same as Current Address
//     //         </h5> */}
//     //             <div
//     //               className="d-flex align-items-center"
//     //               style={{
//     //                 backgroundColor: "skyblue",
//     //                 width: "600px",
//     //                 borderRadius: "10px",
//     //               }}
//     //             >
//     //               <Form.Check
//     //                 style={{ marginLeft: "10px", height: '30px' }}
//     //                 type="checkbox"
//     //                 className="ml-2"
//     //               />
//     //               <h5 style={{ padding: "10px", margin: 0, marginTop: '-3px' }}>
//     //                 Select if Permanent Address is same as Current Address
//     //               </h5>
//     //             </div>

//     //             {/* <hr></hr> */}
//     //           </div>
//     //           <br></br>
//     //           <Form>
//     //             <Row>
//     //               <Col md={6} width="300px">
//     //                 <Form.Group className="mb-3" controlId="Address11">
//     //                   <Form.Label>
//     //                     <b>Address1*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="Address11"
//     //                     required
//     //                     placeholder="House No, Street No or Road No"
//     //                     value={values.address11}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.address11 && touched.address11 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.address11}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>

//     //               <Col md={6} width="300px">
//     //                 <Form.Group className="mb-3" controlId="Address22">
//     //                   <Form.Label>
//     //                     <b>Address2*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="Address22"
//     //                     required
//     //                     placeholder="Colony, Ward, Village, City"
//     //                     value={values.address22}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.address22 && touched.address22 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.address22}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>
//     //             <Row>
//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="Country1" >
//     //                   <Form.Label>
//     //                     <b>Country*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="Country1"
//     //                     required
//     //                     value={values.country1}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.country1 && touched.country1 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.country1}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>

//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="State1">
//     //                   <Form.Label>
//     //                     <b>State*</b>
//     //                   </Form.Label>


//     //                   <select
//     //                     className="form-select"
//     //                     id="inputState"
//     //                     value={data.state}
//     //                     onChange={handleStateChange}
//     //                   >
//     //                     <option value="">Select state</option>
//     //                     {states.map((item, index) => (
//     //                       <option key={index} value={item.isoCode}>
//     //                         {item.name}
//     //                       </option>
//     //                     ))}
//     //                   </select>
//     //                 </Form.Group>
//     //                 {errors.state1 && touched.state1 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.state1}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>

//     //             <Row>
//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="District1" >
//     //                   <Form.Label>
//     //                     <b>District*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="district1"
//     //                     required
//     //                     value={values.district1}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.district1 && touched.district1 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.district1}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>

//     //               <Col md={6}>
//     //                 <Form.Group className="mb-3" controlId="PinCode1" >
//     //                   <Form.Label>
//     //                     <b>Pin Code*</b>
//     //                   </Form.Label>
//     //                   <Form.Control
//     //                     type="text"
//     //                     name="PinCode1"

//     //                     value={values.pinCode1}
//     //                     onChange={handleChange}
//     //                   />
//     //                 </Form.Group>
//     //                 {errors.pinCode1 && touched.pinCode1 ? (
//     //                   <p className="error" style={{ color: "red" }}>
//     //                     {errors.pinCode1}
//     //                   </p>
//     //                 ) : null}
//     //               </Col>
//     //             </Row>
//     //           </Form>
//     //         </div>
//     //       </div><br></br>
// //           <Button onClick={handleSubmit1} className="mx-auto d-block mt-3">
// //             Update
// //           </Button>
// //         </Container>
// //       </ThemeProvider>
// //     </>
// //   );
// // };

// // export default Address;



// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { Container } from "react-bootstrap";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import axios from 'axios';
// import { State, City } from 'country-state-city';
// import Sidebarr from './Sidebarr';
// import Buttonfun from "./ButtonFun";

// const theme = createTheme();

// const Address = () => {
//   const [values, setValues] = useState({
//     address1: "",
//     address2: "",
//     country: "India",
//     state: "",
//     district: "",
//     pinCode: "",
//     address11: "",
//     address22: "",
//     country1: "India",
//     state1: "",
//     district1: "",
//     pinCode1: ""
//   });

//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     const getAllStates = async () => {
//       try {
//         const statesData = await State.getStatesOfCountry('IN');
//         setStates(statesData);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getAllStates();
//   }, []);

//   const handleStateChange = (e) => {
//     const selectedState = e.target.value;
//     if (selectedState) {
//       const countryCode = 'IN';
//       try {
//         const stateCities = City.getCitiesOfState(countryCode, selectedState);
//         setCities(stateCities);
//       } catch (err) {
//         console.log(err);
//       }
//     } else {
//       setCities([]);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const userData = JSON.parse(localStorage.getItem("currentUser"));
//       const studentId = userData.user;
//       const data1 = {
//         ...values,
//         studentId
//       };

//       const response = await axios.put('http://localhost:7786/api/update/address', data1);
//       console.log(response.data);
//       if (response.status === 200) {
//         alert('Address details updated');
//       } else {
//         alert('Failed to update address details');
//       }
//     } catch (error) {
//       console.error('Error updating address data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Sidebarr />
//       <Buttonfun />
//       <Container fluid className="shadow p-3 mb-3 bg-body rounded" style={{ backgroundColor: "#e8e5d1", marginTop: "20px", marginLeft: '250px', width: '80%' }}>
//         <div style={{ display: "flex", gap: '20px' }}>
//           <div style={{ overflow: "hidden" }}>
//           <div
//                 style={{
//                   backgroundColor: "skyblue",
//                   width: "600px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <h5 style={{ padding: "10px", margin: 0, marginTop: '-3px' }}>Current Address</h5>
//                 {/* <hr></hr> */}
//               </div>
//               <br></br>
//               <Form>
//                 <Row>
//                   <Col md={6} width="300px">
//                     <Form.Group className="mb-3" controlId="address1">
//                       <Form.Label>
//                         <b>Address1*</b>
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="address1"
//                         required
//                         placeholder="House No, Street No or Road No"
//                         value={values.address1}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     {errors.address1 && touched.address1 ? (
//                       <p className="error" style={{ color: "red" }}>
//                         {errors.address1}
//                       </p>
//                     ) : null}
//                   </Col>

//                   <Col md={6} width="300px">
//                     <Form.Group className="mb-3" controlId="Address2">
//                       <Form.Label>
//                         <b>Address2*</b>
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="address2"
//                         required
//                         placeholder="Colony, Ward, Village, City"
//                         value={values.address2}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     {errors.address2 && touched.address2 ? (
//                       <p className="error" style={{ color: "red" }}>
//                         {errors.address2}
//                       </p>
//                     ) : null}
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-3" controlId="Country">
//                       <Form.Label>
//                         <b>Country*</b>
//                       </Form.Label>
//                       <Form.Select
//                         aria-label="Default select example"
//                         name="country"
//                         value={values.country}
//                       >
//                         <option value="India">India</option>
//                         <option value="Russia">Russia</option>
//                         <option value="Pakistan">Pakistan</option>
//                         {errors.country && touched.country ? (
//                           <p className="error">{errors.country}</p>
//                         ) : null}
//                       </Form.Select>
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group className="mb-3" controlId="State">
//                       <Form.Label>
//                         <b>State*</b>
//                       </Form.Label>
                     

//                       <select
//                         className="form-select"
//                         id="inputState"
//                         value={values.state}  // Bind the value to the form field
//                         onChange={handleChange} // Handle change event with handleChange function
//                       >
//                         <option value="">Select state</option>
//                         {states.map((item, index) => (
//                           <option key={index} value={item.isoCode}>
//                             {item.name}
//                           </option>
//                         ))}
//                       </select>

//                     </Form.Group>
//                     {errors.state && touched.state ? (
//                       <p className="error" style={{ color: "red" }}>
//                         {errors.state}
//                       </p>
//                     ) : null}
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md={6}>
//                     <Form.Group className="mb-3" controlId="District">
//                       <Form.Label>
//                         <b>District*</b>
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="district"
//                         required
//                         value={values.district}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     {errors.district && touched.district ? (
//                       <p className="error" style={{ color: "red" }}>
//                         {errors.district}
//                       </p>
//                     ) : null}
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group className="mb-3" controlId="PinCode">
//                       <Form.Label>
//                         <b>Pin COde*</b>
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="pinCode"
//                         required
//                         value={values.pinCode}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                     {errors.pinCode && touched.pinCode ? (
//                       <p className="error" style={{ color: "red" }}>
//                         {errors.pinCode}
//                       </p>
//                     ) : null}
//                   </Col>
//                 </Row>
//               </Form>
//             </div>
//           </div>
//           <div style={{ overflow: "hidden" }}>
//             {/* Permanent Address Form */}
//             {/* ... (same as your provided code) ... */}
//           </div>
//         </div>
//         <Button onClick={handleSubmit} className="mx-auto d-block mt-3">
//           Update
//         </Button>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Address;
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { State, City } from 'country-state-city';
import Sidebarr from './Sidebarr';
import Buttonfun from "./ButtonFun";

const theme = createTheme();

const Address = () => {
  const [values, setValues] = useState({
    address1: "",
    address2: "",
    country: "India",
    state: "",
    district: "",
    pinCode: "",
    address11: "",
    address22: "",
    country1: "India",
    state1: "",
    district1: "",
    pinCode1: ""
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getAllStates = async () => {
      try {
        const statesData = await State.getStatesOfCountry('IN');
        setStates(statesData);
      } catch (err) {
        console.log(err);
      }
    };

    getAllStates();
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    if (selectedState) {
      const countryCode = 'IN';
      try {
        const stateCities = City.getCitiesOfState(countryCode, selectedState);
        setCities(stateCities);
      } catch (err) {
        console.log(err);
      }
    } else {
      setCities([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      const studentId = userData.user;
      const data1 = {
        ...values,
        studentId
      };

      const response = await axios.put('http://localhost:7786/api/update/address', data1);
      console.log(response.data);
      if (response.status === 200) {
        alert('Address details updated');
      } else {
        alert('Failed to update address details');
      }
    } catch (error) {
      console.error('Error updating address data:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Sidebarr />
      <Buttonfun />
      <Container fluid className="shadow p-3 mb-3 bg-body rounded" style={{ backgroundColor: "#e8e5d1", marginTop: "20px", marginLeft: '250px', width: '80%' }}>
        <div style={{ display: "flex", gap: '20px' }}>
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                backgroundColor: "skyblue",
                width: "600px",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px", margin: 0, marginTop: '-3px' }}>Current Address</h5>
            </div>
            <br></br>
            <Form>
              <Row>
                <Col md={6} width="300px">
                  <Form.Group className="mb-3" controlId="address1">
                    <Form.Label>
                      <b>Address1*</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address1"
                      required
                      placeholder="House No, Street No or Road No"
                      value={values.address1}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} width="300px">
                  <Form.Group className="mb-3" controlId="Address2">
                    <Form.Label>
                      <b>Address2*</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address2"
                      required
                      placeholder="Colony, Ward, Village, City"
                      value={values.address2}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="Country">
                    <Form.Label>
                      <b>Country*</b>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="country"
                      value={values.country}
                      onChange={handleInputChange}
                    >
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Pakistan">Pakistan</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="State">
                    <Form.Label>
                      <b>State*</b>
                    </Form.Label>
                    <select
                      className="form-select"
                      id="inputState"
                      value={values.state}
                      onChange={(e) => setValues({ ...values, state: e.target.value })}
                    >
                      <option value="">Select state</option>
                      {states.map((item, index) => (
                        <option key={index} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="District">
                    <Form.Label>
                      <b>District*</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      required
                      value={values.district}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="PinCode">
                    <Form.Label>
                      <b>Pin COde*</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="pinCode"
                      required
                      value={values.pinCode}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <Button onClick={handleSubmit} className="mx-auto d-block mt-3">
          Update
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Address;

