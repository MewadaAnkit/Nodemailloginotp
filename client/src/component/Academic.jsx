import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, input, Form } from "react-bootstrap";
import Sidebarr from "./Sidebarr";
import Buttonfun from "./ButtonFun";
import { Box } from "@mui/material";

const theme = createTheme();

const Academic = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebarr />
        <Buttonfun />
        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{ width: "80%", marginLeft:"18%" }}
        >
          <h1 style={{ fontFamily: "italic" }}>Academic</h1>
          <hr></hr>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: "440px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Exam</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>School/College</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Passing Year</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Roll No</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Name of Board/University</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Exam Type</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Marks Obtain</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Max Marks</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>%Age</b>
                      </h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">10th</TableCell>

                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      {" "}
                      <Form.Select>
                        <option value="">--Select--</option>
                        <option value="1">Non Grading</option>
                        <option value="2">Other Option</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="left">12th/Diploma</TableCell>

                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <Form.Select>
                        <option value="">--Select--</option>
                        <option value="1">Non Grading</option>
                        <option value="2">Other Option</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Graduation</TableCell>

                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <Form.Select>
                        <option value="">--Select--</option>
                        <option value="1">Non Grading</option>
                        <option value="2">Other Option</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="left">Post Graduation</TableCell>

                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <Form.Select>
                        <option value="">--Select--</option>
                        <option value="1">Non Grading</option>
                        <option value="2">Other Option</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="left">Other</TableCell>

                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              component="div"
              count={2} // Replace with the actual count of your data
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Academic;