
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

