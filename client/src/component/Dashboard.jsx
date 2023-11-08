import React from "react";
import { Grid, Paper, Avatar, CardContent, Typography } from "@mui/material";
import { Card, Container, Button } from "react-bootstrap";
import Sidebarr from "./Sidebarr";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();

function Dashboard() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Sidebarr />

        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            width: "100%",
            backgroundColor: "#e8e5d1",
            // marginTop: "20px",
            marginLeft:"12%"
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper>
                {" "}
                <Avatar
                  sx={{
                    width: 250,
                    height: 250,
                    marginLeft: "90px",
                    padding: "50px",
                  }}
                  alt="User Avatar"
                  src="/path/to/user-avatar.jpg"
                />
                <br></br>
                <br></br>
                <h2
                  style={{
                    color: "purple",
                    fontFamily: "italic",
                    marginLeft: "120px",
                  }}
                >
                  Kunal Verma
                </h2>
                <h5
                  style={{
                    color: "purple",
                    fontFamily: "italic",
                    marginLeft: "150px",
                  }}
                >
                  456789
                </h5>
                <h5
                  style={{
                    color: "purple",
                    fontFamily: "italic",
                    marginLeft: "130px",
                  }}
                >
                  2022-09-09
                </h5>
              </Paper>

              <Paper style={{ marginTop: "70px" }}>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/03/06/93/82/1000_F_306938243_rAPJKePeDRSqQ7gWFom1scdCj5hEfEiM.jpg"
                  style={{ width: "100px", marginLeft: "140px" }}
                  alt="Italian Trulli"
                ></img>
                <div>
                  <h4 style={{ marginLeft: "100px" }}>Application Status</h4>
                  <h6 style={{ marginLeft: "100px" }}>
                    Check Addmission Status
                  </h6>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Tution Fee</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "black",
                        fontFamily: "Italic",
                      }}
                    >
                      Pending
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title> Address Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Photo Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Document Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Personal Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Academic Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className=" shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Sign Details</Card.Title>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Text
                      style={{
                        fontSize: "40px",
                        color: "purple",
                        fontFamily: "Italic",
                      }}
                    >
                      Completed
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card
                className="shadow p-3  bg-body rounded"
                style={{ width: "25rem", marginTop: "10px", height: "9rem" }}
              >
                <Card.Body>
                  <Card.Title>Transaction History</Card.Title>

                  <Button>View Details</Button>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Dashboard;