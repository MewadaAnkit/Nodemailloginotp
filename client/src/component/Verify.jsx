import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import axios from 'axios'
const Verify = ({ students }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(2);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const userData = JSON.parse(localStorage.getItem("AnkitHOD"));
     const hodId = userData.user
    const handleClick = async(studentId) => {
        console.log('chalne laga bhai ')
        try {
          
            const response = await axios.put(`http://localhost:7786/api/approve`, {
              hodId: hodId,
              studentId
            });
            console.log(response.data); 
          } catch (error) {
            console.error(error); 
          }
    }

    return (
        <Container className="shadow p-3 mb-3 bg-body rounded" style={{ marginTop: "20px", marginLeft: '250px', width: '80%' }}>
            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: "440px" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>S.No.</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Session</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>student Name</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Student Email</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Date of Birth</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>father's Name</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Mother's Name</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Mobile</b></h5>

                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>S.No.</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Qualification</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Qualification %</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Course Type</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Course Name</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Course Branch</b></h5>
                                </TableCell>
                                <TableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
                                    <h5><b>Approve Student</b></h5>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">2023</TableCell>
                                    <TableCell align="left">{student.name}</TableCell>
                                    <TableCell align="left">{student.email}</TableCell>
                                    <TableCell align="left">{student.dob}</TableCell>
                                    <TableCell align="left">{student.fathersName}</TableCell>
                                    <TableCell align="left">{student.mothersName}</TableCell>
                                    <TableCell align="left">{student.mobile}</TableCell>
                                    <TableCell align="left">{student.domicile}</TableCell>
                                    <TableCell align="left">{student.qualification}</TableCell>
                                    <TableCell align="left">{student.qualificationPercentage}</TableCell>


                                    <TableCell align="left">{student.courseType}</TableCell>
                                    <TableCell align="left">{student.courseName}</TableCell>
                                    <TableCell align="left">{student.courseBranch}</TableCell>
                                    <TableCell align="left">
                                        <Button variant="success" onClick={() => handleClick(student._id)}>Approve</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={students.length} // Set the count based on the length of the students array
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    );
};

export default Verify;
