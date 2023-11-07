

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import RegistrationDetails from "./Schema";
import { useFormik } from "formik";
import EligibilityForm from "./EligibilityForm";
import { Box, Stack, FormControl, FormLabel } from "@chakra-ui/react";

import * as Yup from "yup";

const CourseSchema = Yup.object().shape({
  selectedType: Yup.string().min(2).max(10).required("Course Type is required"),
  selectedCourse: Yup.string().required("Course is required"),
  selectedBranch: Yup.string().required("Branch is required"),
});

const initialValues = {
  selectedType: "",
  selectedCourse: "",
  selectedBranch: "",
};

const Course = () => {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: CourseSchema,
    onSubmit: (values) => {
      console.log("hii", values);
      handleSearch();
    },
  });
  ///////////course/////
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [eligible, setEligible] = useState("");
  const [eligibilityGradPer, setEligibilityGradPer] = useState("");

  console.log(selectedType, selectedCourse, selectedBranch, "ststeekjo");

  const courseData = {
    UG: {
      courses: [
        "BACHELOR OF ENGINEERING",
        "BSC(Nursing) SEMESTER",
        "BACHELOR OF ARCHITECTURE",
        "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY",
        "BACHELOR OF ENGINEERING(Lateral)",
        "BACHELOR OF DESIGN",
        "BACHELOR OF DESIGN(Lateral)",
        "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY",
      ],
      branches: {
        "BACHELOR OF ENGINEERING": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BSC(Nursing) SEMESTER": ["Nursing"],
        "BACHELOR OF ARCHITECTURE": ["ARCHITECTURE"],
        "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY": ["HOMEOPATHY"],
        "BACHELOR OF ENGINEERING(Lateral)": [
          "AERONAUTICAL ENGINEERING",
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "ELECTRICAL AND ELECTRONICS ENGINEERING",
          "ELECTRICAL ENGINEERING",
          "ELECTRONICS AND COMMUNICATION ENGINEERING",
          "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
          "MECHANICAL ENGINEERING",
          "MINING ENGINEERING",
        ],
        "BACHELOR OF DESIGN": [
          "INDUSTRIAL DESIGN",
          "COMMUNICATION DESIGN",
          "TEXTILE DESIGN",
          "INTERIOR DESIGN",
          "PRODUCT DESIGN",
        ],
        "BACHELOR OF DESIGN(Lateral)": ["INTERIOR DESIGN"],
        "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY": [
          "AYURVEDIC MEDICINE AND SURGERY",
        ],
      },
    },
    PG: {
      courses: [
        "MASTER OF TECHNOLOGY",
        "MASTER OF PHARMACY",
        "MASTER OF PHYSIOTHERAPHY (ORTHOPAEDIC)",
        "MASTER OF MEDICAL LAB TECHNOLOGY(MMLT)",
      ],
      branches: {
        "MASTER OF TECHNOLOGY": [
          "COMPUTER SCIENCE AND ENGINEERING",
          "COMPUTER TECHNOLOGY AND APPLICATION",
          "INFORMATION TECHNOLOGY",
          "SOFTWARE ENGINEERING",
          "DIGITAL COMMUNICATION",
          "ELECTRICAL POWER SYSTEM",
          "INDUSTRIAL DESIGN",
          "POWER ELECTRONICS",
          "STRUCTURAL DESIGN",
          "THERMAL ENGINEERING",
          "VLSI",
        ],
        "MASTER OF PHARMACY": ["PHARMACEUTICS", "PHARMACOLOGY"],
        "MASTER OF PHYSIOTHERAPHY (ORTHOPAEDIC)": ["ORTHOPAEDIC"],
        "MASTER OF MEDICAL LAB TECHNOLOGY(MMLT)": ["HAEMOTOLOGY"],
      },
    },
    Diploma: {
      courses: [
        "DIPLOMA PHARMACY",
        "DIPLOMA BLOOD TRANSFUSION",
        "DIPLOMA DIALYSIS TECHNICIAN",
        "DIPLOMA PHARMACY (AYURVED)",
        "DIPLOMA HUMAN NUTRITION",
        "DIPLOMA MEDICAL LAB AND TECHNICIAN",
        "DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN",
        "DIPLOMA YOGA",
        "DIPLOMA ENGINEERING",
        "DIPLOMA PHARMACY (HOMEOPATHY)",
        "DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT",
        "DIPLOMA ENGINEERING  (Lateral)",
      ],
      branches: {
        "DIPLOMA PHARMACY": ["PHARMACY"],
        "DIPLOMA BLOOD TRANSFUSION": ["BLOOD TRANSFUSION"],
        "DIPLOMA DIALYSIS TECHNICIAN": ["DIALYSIS TECHNICIAN"],
        "DIPLOMA PHARMACY (AYURVED)": ["AYURVED"],
        "DIPLOMA HUMAN NUTRITION": ["HUMAN NUTRITION"],
        "DIPLOMA MEDICAL LAB AND TECHNICIAN": ["HUMAN NUTRITION"],
        "DIPLOMA X-RAY RADIOGRAPHER TECHNICIAN": [
          "X-RAY RADIOGRAPHER TECHNICIAN",
        ],
        "DIPLOMA YOGA": ["YOGA"],
        "DIPLOMA ENGINEERING": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
        "DIPLOMA PHARMACY (HOMEOPATHY)": ["HOMEOPATHIC"],
        "DIPLOMA PARAMEDICAL OPTHALMIC ASSISTENT": ["OPTHALMIC"],
        "DIPLOMA ENGINEERING  (Lateral)": [
          "CHEMICAL ENGINEERING",
          "CIVIL ENGINEERING",
          "COMPUTER SCIENCE AND ENGINEERING",
          "MECHANICAL ENGINEERING",
          "ELECTRICAL ENGINEERING",
        ],
      },
    },
    PGDIPLOMA: {
      courses: ["POST GRADUATION DIPLOMA IN COMPUTER APPLICATION"],
      branches: {
        "POST GRADUATION DIPLOMA IN COMPUTER APPLICATION": [
          "COMPUTER APPLICATION",
        ],
      },
    },
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse("");
    setSelectedBranch("");
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedBranch("");
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  ///////////////////////////
  const handleSearch = () => {
    fetch("http://localhost:7786/geteligibility", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseType: selectedType,
        courseName: selectedCourse,
        courseBranch: selectedBranch,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEligible(data);
        setEligibilityGradPer(data.eligibilityGradPer);

        console.log("Eligibility data:", data.eligibilityGradPer);
        // Handle the data received from the server (e.g., update state)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors (e.g., display an error message)
      });
  };
  return (
    <>
      <Container
        className="shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "87%", margin: "50px auto" }}
      >
        <div style={{ backgroundColor: "lightgray" }}></div>
        <Box>
          <Box
            bg="skyblue"
            p={4}
            color="black"
            mt={8}
            borderRadius="md"
            shadow="md"
          >
            Search
          </Box>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>
            <FormControl flex="1">
              <FormLabel>
                <b>Course Type: *</b>
              </FormLabel>
              <select
                value={selectedType}
                onChange={handleTypeChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: " 1px solid black ",
                  borderRadius: "4px",
                }}
              >
                <option value="">Select Type</option>
                {Object.keys(courseData).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.selectedType && touched.selectedType ? (
                <p className="error">{errors.selectedType}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Course: *</b>
              </FormLabel>
              <select
                value={selectedCourse}
                onChange={handleCourseChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: " 1px solid black ",
                  borderRadius: "4px",
                }}
              >
                <option value=""> Select Course </option>
                {selectedType &&
                  courseData[selectedType].courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
              </select>
              {errors.selectedCourse && touched.selectedCourse ? (
                <p className="error">{errors.selectedCourse}</p>
              ) : null}
            </FormControl>

            <FormControl flex="1">
              <FormLabel>
                <b>Branch: *</b>
              </FormLabel>
              <select
                value={selectedBranch}
                onChange={handleBranchChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: " 1px solid black ",
                  borderRadius: "4px",
                }}
              >
                <option value="">Select Branch</option>
                {selectedCourse &&
                  courseData[selectedType].branches[selectedCourse].map(
                    (branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    )
                  )}
              </select>
              {errors.selectedBranch && touched.selectedBranch ? (
                <p className="error">{errors.selectedBranch}</p>
              ) : null}
            </FormControl>
          </Stack>
          <Button
            style={{ margin: "30px auto", display: "block" }}
            variant="outline-secondary"
             onClick={handleSearch}
           // onClick={handleSubmit}
          >
            Search
          </Button>
        </Box>
      </Container>
      {eligible && (
        <EligibilityForm
          eligible={eligible}
          eligibilityGradPer={eligibilityGradPer}
          courseType={selectedType}
          courseName={selectedCourse}
          courseBranch={selectedBranch}
        />
      )}
    </>
  );
};

export default Course;
