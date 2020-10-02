import React, { Component } from "react";
import axios from "axios";
// import './index.css'
import styled from "styled-components";

const GOOGLE_FORM_NAME = "entry.512464901";
const GOOGLE_FORM_PHONE = "entry.1444540660";
const GOOGLE_FORM_EMAIL = "entry.1014553025";
const GOOGLE_FORM_HELP = "entry.588167175";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScEdpBAGUDnRkf05QedoqstiZ26dJZZhlriPb3t43Sf0vdY-Q/formResponse";

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin-bottom: 1.5rem;
  }
`;
const Row1 = styled.div`
  /* max-width: 80rem; */
  max-width: 95rem;
  width: 100%;
  margin: 0;
padding: 0 2rem;
  @media (max-width: 80rem) {
    /* margin-left: 12px;
    margin-right: 12px; */
    margin:0;
  }
`;

class VolunteerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            help: [],
            showForm: true,
            sendingMessage: false,
            messageSent: false,
            messageError: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;

        if(target.checked){
            this.state.help[value] = value;
        }else{
            this.state.help.splice(value, 1);
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            sendingMessage: true,
        });
        this.sendMessage();
    };

    handleFormToggle = () => {
        this.setState((prevState) => {
            const { showForm } = prevState;
            return {
                showForm: !showForm,
            };
        });
    };

    handleReturnButton = () => {
        this.setState({
            showForm: false,
            messageSent: false,
            messageError: false,
        });
    };

    sendMessage = () => {
        const formData = new FormData();
        formData.append(GOOGLE_FORM_NAME, this.state.name);
        formData.append(GOOGLE_FORM_PHONE, this.state.phone);
        formData.append(GOOGLE_FORM_EMAIL, this.state.email);
        formData.append(GOOGLE_FORM_HELP, this.state.help);

        axios
            .post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
            .then(() => {
                this.setState({
                    messageSent: true,
                    sendingMessage: false,
                    name: "",
                    phone: "",
                    email: "",
                    help: "",
                });
            })
            .catch(() => {
                this.setState({
                    messageError: true,
                    sendingMessage: false,
                });
            });
    };

    returnButton = () => (
        <button
            id="return-button"
            className="btn btn-default btn-xs"
            onClick={this.handleReturnButton}
        >
            Return
        </button>
    );

    render() {
        if (this.state.sendingMessage) {
            return (
                <Row1>
                    <div className="emailsuscribe">
                        <Container1>
                            <div className="container">
                                <h3 className="margin-bottom">
                                    <b>Signing up...</b>
                                </h3>
                            </div>{" "}
                        </Container1>
                    </div>
                </Row1>
            );
        }

        if (this.state.messageSent) {
            return (
                <React.Fragment>
                    <Row1>
                        <div className="emailsuscribe">
                            <Container1>
                                <div className="container msg-container">
                                    {/* <div className="success-message"> */}
                                    <h3 className="margin-bottom">
                                        <b>You have successfully signed up!</b>
                                    </h3>
                                    <p>
                                        We will  be contacting you soon to complete the process.
                                    </p>
                                    {/* </div> */}
                                    {/* {this.returnButton()} */}
                                </div>
                            </Container1>
                        </div>
                    </Row1>
                </React.Fragment>
            );
        }

        if (this.state.messageError) {
            return (
                <React.Fragment>
                    <Row1>
                        <div className="emailsuscribe">
                            <Container1>
                                <div className="container msg-container">
                                    {/* <div className="error-message"> */}
                                    <h3 className="margin-bottom">
                                        <b>Error!</b>
                                    </h3>
                                    <p>
                                        You were not able to successfully sign up. Please confirm
                                        you entered the information and try again.
                                    </p>{" "}
                                    {/* </div> */}
                                    {this.returnButton()}
                                </div>
                            </Container1>
                        </div>
                    </Row1>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <Row1>
                    <div className="volunteer-form">
                        <Container1>
                            <div>
                                <h4 className="signuph4">Volunteer</h4>
                                {/*<p>*/}
                                {/*  Sign up to get the latest news and updates about the Feeding Community Initiative.*/}
                                {/*</p>*/}
                            </div>
                            <form onSubmit={this.handleSubmit} className="form-inline ig">
                                <div className="input-group ig1">
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        size="35"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="phone"
                                        name="phone"
                                        id="phone"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        size="35"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        size="35"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />

                                    <textarea
                                        id="help"
                                        name="help"
                                        className="form-control"
                                        placeholder="Please share how you can help and when you are available. There are many ways to get involved and we value your time!"
                                        value={this.state.help}
                                        onChange={this.handleChange}
                                        rows="8"
                                    />
                                </div>

                                <div className="input-group-btn ig2">
                                    <button type="submit" className="btn btn-danger">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </Container1>
                    </div>
                </Row1>
            </React.Fragment>
        );
    }
}

export default VolunteerForm;
