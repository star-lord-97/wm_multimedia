import React, { Component, Fragment } from "react";
import NavBar from "../navigation_bar";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class ForgotPassword extends Component {
    state = {
        email: "",
        errors: {
            email: "",
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
        }
        this.setState({ errors, [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: "",
        });
        console.log(this.state.email);
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
                                <div id="passrecoverypage">
                                    <div className="title">Password Recovery</div>
                                    <div className="content">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-group">
                                                <span className="input-group-addon" id="usr_login">
                                                    <i className="fa fa-envelope"></i>
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
                                            <br />
                                            {/* استعادة كلمة المرور */}
                                            <input
                                                type="submit"
                                                name="submit"
                                                value="Restore password"
                                            />
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
export default ForgotPassword;
