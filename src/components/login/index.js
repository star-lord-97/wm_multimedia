import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navigation_bar";
import axios from "axios";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validpasswordRegex = RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");

class Login extends Component {
    state = {
        email: "",
        password: "",
        messageCredentials: "",
        errors: {
            email: "",
            password: "",
        },
    };

    handleChange = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "email":
                errors.email =
                    value.length == 0
                        ? ""
                        : validEmailRegex.test(value)
                        ? ""
                        : "Email is not valid!(Must Contain @ ,.com)";
                break;
            case "password":
                errors.password =
                    value.length == 0
                        ? ""
                        : validpasswordRegex.test(value)
                        ? ""
                        : "Password is not valid!(Must Contain at least 8 characters and $ , a-z ,A-z)";
                break;
        }
        this.setState({ errors, [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: "",
            password: "",
        });

        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post("http://localhost:8000/api/login", user, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                if (response.data === "invalid credentials") {
                    console.log(response.data);
                    this.setState({
                        messageCredentials:
                            "Invalid credentials, double check your email/password!!",
                    });
                } else {
                    console.log(response.data);
                    localStorage.clear();
                    localStorage.setItem("id", response.data.id);
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("public_key", response.data.public_key);
                    localStorage.setItem("private_key", response.data.private_key);
                    this.props.history.push(`/MyFile`);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const { errors } = this.state;
        return (
            <Fragment>
                <NavBar />
                <div id="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
                                <div id="loginpage">
                                    <div className="title">User Login</div>
                                    <div className="content">
                                        <form onSubmit={this.handleSubmit}>
                                            <span className="error">
                                                {this.state.messageCredentials}
                                            </span>

                                            <div className="input-group">
                                                <span className="input-group-addon" id="login">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter your Login E-mail"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                />
                                            </div>
                                            {errors.email.length > 0 && (
                                                <span className="error">{errors.email}</span>
                                            )}

                                            <div className="input-group">
                                                <span className="input-group-addon" id="password">
                                                    <i className="fa fa-key"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                />
                                            </div>
                                            {errors.password.length > 0 && (
                                                <span className="error">{errors.password}</span>
                                            )}
                                            <br />
                                            <div className="pull-left">
                                                <input type="submit" value="Submit" />
                                            </div>
                                            <div className="pull-right">
                                                <div className="forgotpass">
                                                    <Link to="/forgotpass">
                                                        Forgot Your Password ?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Login;
