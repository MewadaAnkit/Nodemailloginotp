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
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState({
    tenthSchool: "",
    tenthPassingYear: "",
    tenthRollNo: "",
    tenthBoard: "",
    tenthExamType: "",
    tenthMarksObtain: "",
    tenthMaxMarks: "",
    tenthPercentage: "",
    twelfthSchool: "",
    twelfthPassingYear: "",
    twelfthRollNo: "",
    twelfthBoard: "",
    twelfthExamType: "",
    twelfthMarksObtain: "",
    twelfthMaxMarks: "",
    twelfthPercentage: "",
    graduationCollege: "",
    graduationPassingYear: "",
    graduationRollNo: "",
    graduationUniversity: "",
    graduationExamType: "",
    graduationMarksObtain: "",
    graduationMaxMarks: "",
    graduationPercentage: "",
    postGraduationCollege: "",
    postGraduationPassingYear: "",
    postGraduationRollNo: "",
    postGraduationUniversity: "",
    postGraduationExamType: "",
    postGraduationMarksObtain: "",
    postGraduationMaxMarks: "",
    postGraduationPercentage: "",
    otherExam: "",
    otherSchool: "",
    otherPassingYear: "",
    otherRollNo: "",
    otherBoard: "",
    otherExamType: "",
    otherMarksObtain: "",
    otherMaxMarks: "",
    otherPercentage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const userData = JSON.parse(localStorage.getItem("currentUser"));
      const studentId = userData.user;
    try {
      const response = await fetch("http://localhost:7786/api/update/academic", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          academicDetails: formData,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Academic Details updated Successfully')
        console.log("Academic details updated successfully:", data);
       
      } else {
        console.error("Failed to update academic details");
      
      }
    } catch (error) {
      console.error("Error updating academic details:", error);
    
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(formData)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebarr />
        <Buttonfun />
        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{ width: "80%", marginLeft: "18%" }}
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
                        type="text"
                        name="tenthSchool"
                        value={formData.tenthSchool}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthPassingYear"
                        value={formData.tenthPassingYear}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthRollNo"
                        value={formData.tenthRollNo}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthBoard"
                        value={formData.tenthBoard}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <Form.Select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option value="">--Select--</option>
                        <option value="Non Grading">Non Grading</option>
                        <option value="Others">Other Option</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthExamType"
                        value={formData.tenthExamType}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthMarksObtain"
                        value={formData.tenthMarksObtain}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="tenthPercentage"
                        value={formData.tenthPercentage}
                        onChange={handleChange}
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
                        type="text"
                        name="twelfthSchool"
                        value={formData.twelfthSchool}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name=" twelfthPassingYear"
                        value={formData.twelfthPassingYear}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="twelfthRollNo"
                        value={formData.twelfthRollNo}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name=" twelfthBoard"
                        value={formData.twelfthBoard}
                        onChange={handleChange}
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
                        type="text"
                        name="twelfthMarksObtain"
                        value={formData.twelfthMarksObtain}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name=" twelfthMaxMarks"
                        value={formData.twelfthMaxMarks}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="twelfthPercentage"
                        value={formData.twelfthPercentage}
                        onChange={handleChange}
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
                        type="text"
                        name=" graduationCollege"
                        value={formData.graduationCollege}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "150px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="graduationPassingYear"
                        value={formData.graduationPassingYear}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "180px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="graduationRollNol"
                        value={formData.graduationRollNo}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "200px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="text"
                        name="graduationUniversity"
                        value={formData.graduationUniversity}
                        onChange={handleChange}
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
                        type="text"
                        name=" graduationExamType"
                        value={formData.graduationExamType}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input

                        type="text"
                        name=" graduationMarksObtain"
                        value={formData.graduationMarksObtain}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          width: "80px",
                          height: "50px",
                        }}
                      ></input>
                    </TableCell>
                    <TableCell align="left">
                      <input

                        type="text"
                        name="graduationMaxMarks"
                        value={formData.graduationMaxMarks}
                        onChange={handleChange}
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
          <Button onClick={handleSubmit} className="mx-auto d-block mt-3">
          Update
        </Button>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Academic;


// import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Container, input, Form } from "react-bootstrap";
// import Sidebarr from "./Sidebarr";
// import Buttonfun from "./ButtonFun";
// import { Box } from "@mui/material";

// const theme = createTheme();

// const Academic = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(2);
//   const [formData, setFormData] = useState({
//     tenthSchool: "",
//     tenthPassingYear: "",
//     tenthRollNo: "",
//     tenthBoard: "",
//     tenthExamType: "",
//     tenthMarksObtain: "",
//     tenthMaxMarks: "",
//     tenthPercentage: "",
//     twelfthSchool: "",
//     twelfthPassingYear: "",
//     twelfthRollNo: "",
//     twelfthBoard: "",
//     twelfthExamType: "",
//     twelfthMarksObtain: "",
//     twelfthMaxMarks: "",
//     twelfthPercentage: "",
//     graduationCollege: "",
//     graduationPassingYear: "",
//     graduationRollNo: "",
//     graduationUniversity: "",
//     graduationExamType: "",
//     graduationMarksObtain: "",
//     graduationMaxMarks: "",
//     graduationPercentage: "",
//     postGraduationCollege: "",
//     postGraduationPassingYear: "",
//     postGraduationRollNo: "",
//     postGraduationUniversity: "",
//     postGraduationExamType: "",
//     postGraduationMarksObtain: "",
//     postGraduationMaxMarks: "",
//     postGraduationPercentage: "",
//     otherExam: "",
//     otherSchool: "",
//     otherPassingYear: "",
//     otherRollNo: "",
//     otherBoard: "",
//     otherExamType: "",
//     otherMarksObtain: "",
//     otherMaxMarks: "",
//     otherPercentage: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleSubmit = () => {
//     // Send formData to the backend API
//     console.log(formData); // You can remove this line, it's for debugging
//     // Add your API call logic here
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Sidebarr />
//         <Buttonfun />
//         <Container className="shadow p-3 mb-3 bg-body rounded" style={{ width: "80%", marginLeft: "18%" }}>
//           <h1 style={{ fontFamily: "italic" }}>Academic</h1>
//           <hr />
//           <Paper sx={{ width: "100%" }}>
//             <TableContainer sx={{ maxHeight: "440px" }}>
//               {/* Your table header */}
//               <Table stickyHeader aria-label="sticky table">
//                 <TableHead>
//                   {/* Table header rows */}
//                 </TableHead>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell align="left">10th</TableCell>
//                     <TableCell align="left">
//                       <input
//                         type="text"
//                         name="tenthSchool"
//                         value={formData.tenthSchool}
//                         onChange={handleChange}
//                         style={{ borderRadius: "5px", width: "150px", height: "50px" }}
//                       />
//                     </TableCell>
//                     <TableCell align="left">
//                       <input
//                         type="text"
//                         name="tenthPassingYear"
//                         value={formData.tenthPassingYear}
//                         onChange={handleChange}
//                         style={{ borderRadius: "5px", width: "180px", height: "50px" }}
//                       />
//                     </TableCell>
//                     {/* Add other input fields similarly */}
//                   </TableRow>
//                   {/* Add more rows and input fields here */}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//             <TablePagination
//               rowsPerPageOptions={[25, 50, 100]}
//               component="div"
//               count={2} // Replace with the actual count of your data
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//             <Button variant="primary" onClick={handleSubmit}>Submit</Button>
//           </Paper>
//         </Container>
//       </ThemeProvider>
//     </>
//   );
// };

// export default Academic;
