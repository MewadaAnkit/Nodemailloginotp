import React from "react";
import { Container, Button } from "react-bootstrap";
import { Grid } from "@mui/material";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Buttonfun from "./ButtonFun";
import Sidebarr from "./Sidebarr";
import axios from 'axios'
import {useNavigate}   from 'react-router-dom'
const theme = createTheme();

const initialValues = {
  Handicapped: "",
  Medium: "",
  Nationality: "",
  Domicile: "",
  ScholarshipRequired: "",
  FathersOccupation: "",
  MothersOccupation: "",
  FathersIncome: "",
  MothersIncome: "",
  SamagraId: "",
  AadharNumber: "",
  ParentMobile: "",
};
const ProfessionalSchema = Yup.object().shape({
  Handicapped: Yup.string().required("Handicapped is required"),
  Medium: Yup.string().required("Medium is required"),
  Nationality: Yup.string().required("Nationality is required"),
  Domicile: Yup.string().required("Domicile is required"),
  ScholarshipRequired: Yup.string().required(
    "Scholarship Required is required"
  ),
  FathersOccupation: Yup.string().required("Father's Occupation is required"),
  MothersOccupation: Yup.string().required("Mother's Occupation is required"),
  FathersIncome: Yup.string().required("Father's Income is required"),
  MothersIncome: Yup.string().required("Mother's Income is required"),
  SamagraId: Yup.string().required("Samagra Id is required"),
  AadharNumber: Yup.number()
    .max(12)
    .min(12)
    .required("Aadhar Number is required"),
  ParentMobile: Yup.number()
    .max(10)
    .min(10)
    .required("Parent Mobile is required"),
});

const Professional = () => {

  const navigate  = useNavigate()
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const studentId= userData.user;
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ProfessionalSchema,
      onSubmit: (values) => {
        console.log('hello ' , values)
         handleSubmit1(values)
      },
    });
    const data1 = {
      ...values,
      studentId
    }
    console.log(data1 , "dariya ")
    const handleSubmit1 = async () => {
      
      try {
      
        const response = await axios.put('http://localhost:7786/api/update', data1);
        console.log(response.data); 
        if(response.ok){
          alert('Professional Details updates')
          navigate('/address')
        }
        
      } catch (error) {
        console.error('Error updating professional data:', error);
      }
    };

  const data = {
    Handicapped: values.Handicapped,
    Medium: values.Medium,
    Nationality: values.Nationality,
    Domicile: values.Domicile,
    ScholarshipRequired: values.ScholarshipRequired,
    FathersOccupation: values.FathersOccupation,
    MothersOccupation: values.MothersOccupation,
    FathersIncome: values.FathersIncome,
    MothersIncome: values.MothersIncome,
    SamagraId: values.SamagraId,
    AadharNumber: values.AadharNumber,
    ParentMobile: values.ParentMobile,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebarr />
        <Buttonfun />

        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            width: "75%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <h1 style={{ fontFamily: "italic" }}>Proffessional </h1>
          <hr></hr>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={4}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="Handicapped">
                <Form.Label>
                  <b>Handicapped:*</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Handicapped"
                  value={values.Handicapped}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">--Select Please--</option>
                  <option value="1">YES</option>
                  <option value="2">NO</option>
                </Form.Select>
                {errors.Handicapped && touched.Handicapped ? (
                  <p className="error" style={{ color: "red" }}>
                    {errors.Handicapped}
                  </p>
                ) : null}
              </Form.Group>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="Medium">
                <Form.Label>
                  <b>Medium:*</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Medium"
                  value={values.Medium}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">--Select Please--</option>
                  <option value="1">English</option>
                  <option value="2">Hindi</option>
                </Form.Select>
                {errors.Medium && touched.Medium ? (
                  <p className="error" style={{ color: "red" }}>
                    {errors.Medium}
                  </p>
                ) : null}
              </Form.Group>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="Nationality">
                <Form.Label>
                  <b>Nationality:*</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Nationality"
                  value={values.Nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">--Please Select--</option>
                  <option value="1">Indian</option>
                </Form.Select>
                {errors.Nationality && touched.Nationality ? (
                  <p className="error" style={{ color: "red" }}>
                    {errors.Nationality}
                  </p>
                ) : null}
              </Form.Group>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="Domicile">
                <Form.Label>
                  <b>Domicile:*</b>
                </Form.Label>
                <Form.Select
                  name="Domicile"
                  value={values.Domicile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">--Select Please--</option>
                  <option value="1">MP</option>
                  <option value="2">Other Option</option>
                </Form.Select>
                {errors.Domicile && touched.Domicile ? (
                  <p className="error" style={{ color: "red" }}>
                    {errors.Domicile}
                  </p>
                ) : null}
              </Form.Group>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="ScholarshipRequired">
                <Form.Label>
                  <b>Scholarship Required:*</b>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="ScholarshipRequired"
                >
                  <option value="1">YES</option>
                  <option value="2">NO</option>
                  {errors.ScholarshipRequired && touched.ScholarshipRequired ? (
                    <p className="error" style={{ color: "red" }}>
                      {errors.ScholarshipRequired}
                    </p>
                  ) : null}
                </Form.Select>
              </Form.Group>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="FathersOccupation">
                <Form.Label>
                  <b>Father's Occupation:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="FathersOccupation"
                  required
                  value={values.FathersOccupation}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.FathersOccupation && touched.FathersOccupation ? (
                <p className="error" style={{ color: "red" }}>
                  {errors.FathersOccupation}
                </p>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="MothersOccupation">
                <Form.Label>
                  <b>Mother's Occupation:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="MothersOccupation"
                  required
                  value={values.MothersOccupation}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.MothersIncome && touched.MothersIncome ? (
                <p className="error" style={{ color: "red" }}>
                  {errors.MothersIncome}
                </p>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="FathersIncome">
                <Form.Label>
                  <b>Father's Income:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="FathersIncome"
                  required
                  value={values.FathersIncome}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.FathersIncome && touched.FathersIncome ? (
                <p className="error" style={{ color: "red" }}>
                  {errors.FathersIncome}
                </p>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="MothersIncome">
                <Form.Label>
                  <b>Mother's Income:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="MothersIncome"
                  required
                  value={values.MothersIncome}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.MothersIncome && touched.MothersIncome ? (
                <p className="error" style={{ color: "red" }}>
                  {errors.MothersIncome}
                </p>
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="SamagraId">
                <Form.Label>
                  <b>Samagra Id:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="SamagraId"
                  required
                  value={values.SamagraId}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.SamagraId && touched.SamagraId ? (
                <p className="error" style={{ color: "red" }}>
                  {errors.SamagraId}
                </p>
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="AadharNumber">
                <Form.Label>
                  <b>Aadhar Number*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="AadharNumber"
                  required
                  value={values.AadharNumber}
                  onChange={handleChange}
                />
              </Form.Group>
             
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              //   mt={2}
              style={{ color: "purple", fontFamily: "italic" }}
            >
              <Form.Group className="mb-3" controlId="ParentMobile">
                <Form.Label>
                  <b>Parent Mobile:*</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="ParentMobile"
                  required
                  value={values.ParentMobile}
                  onChange={handleChange}
                />
              </Form.Group>
             
            </Grid>
          </Grid>

          <Button onClick={handleSubmit1} style={{ marginLeft: "600px" }}>
            Update
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Professional;
