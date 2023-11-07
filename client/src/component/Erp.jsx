import React from "react";
import Header from "../component/Header";
import {Link} from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap";

const Erp = () => {
  return (
    <div>
      <Header />

      <Container className="my-5">
        <Row>
           <Col md={6}>
              <Link to="/studentlogin"> {/* Add this Link component */}
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Student Login</Card.Title>
                    <Card.Text>
                      This is a student login you can click here and go to Student Login.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/adminlogin"> {/* Add this Link component */}
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>HOD Login</Card.Title>
                    <Card.Text>
                    This is a Hod login you can click here and go to Hod Login.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Erp;