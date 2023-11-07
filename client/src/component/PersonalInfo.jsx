
import React from "react";
import { Container } from "react-bootstrap";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebarr";
import Buttonfun from "./ButtonFun";
import {ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const PersonalInfo = () => {
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  const name1 = userData.username;
  const email1 = userData.email;
  const dob1 = userData.dob;
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, "0"); // Format the day with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1 and format with leading zero
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const formattedDate = formatDate(dob1);
  return (
    // <Paper elevation={3}  style={{ padding: '20px',width:'100%', marginTop: '20px' }}>
    <>
      <ThemeProvider theme={theme}>
      <Sidebar />
      <Buttonfun />

      <Container
        className="shadow p-3 mb-3 bg-body rounded"
        style={{ width: "80%", backgroundColor: "#e8e5d1", marginTop: "20px", marginLeft: "250px" }}
      >
        <h1 style={{ fontFamily: "italic" }}>Personal Information</h1>
        <hr></hr>
        <Grid container spacing={3} mt="10px">
          <Grid
            item
            xs={12}
            md={4}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Name: {name1}</b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b>Father's Name: {userData?.fathersName}</b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Mother's Name: {userData?.mothersName}</b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b>Birth Date: {formattedDate} </b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Gender:{userData?.gender}</b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Mobile: </b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Category: </b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Email: {email1}</b>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Qualification:</b>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Last Exam Passing Type: </b>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Passing Year: </b>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            mb={7}
            mt={2}
            style={{ color: "purple", fontFamily: "italic" }}
          >
            <b> Qualifying Exam Percentage: </b>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Container>
      </ThemeProvider>
    </>
  );
};

export default PersonalInfo;