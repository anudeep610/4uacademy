import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./css/Registration.css";
import features from "../assets/images/features.png";
import axios from "axios";
import {Triangle} from "react-loader-spinner";

export default function Registration() {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [studentDetails, setStudentDetails] = useState({course:"java"});
    const [result, setResult] = useState(false);
    const [failed, setFailed] = useState(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            sendRequest();
        }
        setValidated(true);
    };

    const sendRequest = () => {
        setLoading(true);
        axios.post('http://localhost:3001/register', studentDetails)
            .then(response => {
                if (response.status === 200) {
                        setLoading(false);
                        setResult(true);
                        setFailed(false);
                }
                else {
                    setLoading(false);
                    setResult(false);
                    setFailed(true);
                }
            })
            .catch(response => {
                setLoading(false);
                setResult(false);
                setFailed(true);
        });
    };

    return <section className="registration-page">
        <h3 className="section-heading">Register Now !!!</h3>
        {
            failed && <div className="result-text">There was some error ;) please try again.</div>
        }
        {
            loading && <div className="loader"><Triangle
            height="250"
            width="250"
            color="#4fa94d"
            visible={true}
            className="loader"
            /></div>
        }
        {
            (!result && !loading) && <div className={`registration-page-content ${loading}`}>
            <div className="image-container">
                <img src={features} alt="" />
            </div>
            <div className="registration-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mt-5 mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="name" onChange={(e)=>{setStudentDetails({...studentDetails ,name:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className="input" size="lg" required type="tel" name="contact" pattern="[6-9]{1}[0-9]{9}" onChange={(e)=>{setStudentDetails({...studentDetails ,contact:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control className="input" size="lg" required type="email" name="email" onChange={(e)=>{setStudentDetails({...studentDetails ,email:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="college" onChange={(e)=>{setStudentDetails({...studentDetails ,college:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control className="input" size="lg" required type="text" name="branch" onChange={(e)=>{setStudentDetails({...studentDetails ,branch:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Year</Form.Label>                            
                            <Form.Control className="input" size="lg" required type="text" name="YearOfStudy" onChange={(e)=>{setStudentDetails({...studentDetails ,yearOfStudy:e.target.value})}}/>
                        </Form.Group>
                    </Row>

                    <Button className="my-3 btn-submit" size="lg" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
        }
        {
            result && <div className="result-text">Your Registraion is successfull. We will contact You soon.</div>
        }
    </section>;
}