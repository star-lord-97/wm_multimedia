import React, { Component, Fragment } from "react";
import NavBar from "../navigation_bar";
import axios from "axios";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validpasswordRegex = RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        messageEmail: "",
        errors: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    };

    handleChange = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case "name":
                errors.name =
                    value.length == 0
                        ? ""
                        : value.length < 5
                        ? "Full Name must be at least 5 characters long!(Please Rewrite The Name)"
                        : "";
                break;
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
            case "confirmPassword":
                errors.confirmPassword =
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
        // this to clear input filed
        this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };

        // this to check confirmPassword
        if (this.state.password !== this.state.confirmPassword) {
            this.state.errors.confirmPassword =
                "The form will not submit(XD) the passwords doesn't match must be match";
            return false; // The form will not submit
        } else {
            // here send data using axios
            axios
                .post("http://localhost:8000/api/register", user, {
                    headers: { "Content-Type": "application/json" },
                })
                .then((response) => {
                    if (response.data === "email taken") {
                        this.setState({
                            messageEmail: "E-mail already taken, choose another email!!",
                        });
                    } else {
                        console.log(response.data);
                        this.props.history.push("/login");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    render() {
        // this to hole message in variable in the render
        const { errors } = this.state;
        return (
            <Fragment>
                <NavBar />
                <div id="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
                                <div id="registerpage">
                                    <div className="title">User Registration</div>
                                    <div className="content">
                                        <form onSubmit={this.handleSubmit}>
                                            <span className="error">{this.state.messageEmail}</span>
                                            <div className="input-group">
                                                <span className="input-group-addon" id="name">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.name}
                                                />
                                            </div>
                                            {errors.name.length > 0 && (
                                                <span className="error">{errors.name}</span>
                                            )}

                                            <div className="input-group">
                                                <span className="input-group-addon" id="usr_email">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="E-mail"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                />
                                            </div>
                                            {errors.email.length > 0 && (
                                                <span className="error">{errors.email}</span>
                                            )}

                                            <div className="input-group">
                                                <span
                                                    className="input-group-addon"
                                                    id="usr_password"
                                                >
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

                                            <div className="input-group">
                                                <span
                                                    className="input-group-addon"
                                                    id="usr_password2"
                                                >
                                                    <i className="fa fa-key"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    className="form-control"
                                                    placeholder="Retype Password"
                                                    autoComplete="off"
                                                    required
                                                    onChange={this.handleChange}
                                                    value={this.state.confirmPassword}
                                                />
                                            </div>
                                            {errors.confirmPassword.length > 0 && (
                                                <span className="error">
                                                    {errors.confirmPassword}
                                                </span>
                                            )}
                                            <br />
                                            <input type="submit" name="submit" />
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
export default SignUp;
