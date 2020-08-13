import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    state = {
        isLogin: false,
        id: localStorage.getItem("id"),
    };

    componentDidMount() {
        if (this.state.id) {
            this.setState({ isLogin: true });
        }
    }

    logout = () => {
        localStorage.clear();
        this.setState({ isLogin: false });
    };

    render() {
        return (
            <Fragment>
                <div id="sidebarphone">
                    <button className="closemenu" type="button">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signUp">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/premium">Premium</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div id="intro" className="insidepages">
                    <div className="inside">
                        <div className="container">
                            <div id="headerone">
                                <div className="socialmedia wow fadeInUp">
                                    <a href="###" title="facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="###" title="twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="###" title="youtube">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                    <a href="###" title="google">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a href="###" title="instagram">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                                <div className="headerbottom">
                                    <div className="logo wow fadeInUp">
                                        <img
                                            src="./vendor/images/water.png"
                                            alt=" Watermark photos"
                                        />
                                    </div>
                                    <button
                                        className="buttonmenu hidden-md hidden-lg wow fadeInUp"
                                        type="button"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </button>
                                    {/* name user */}
                                    {this.state.isLogin && (
                                        <Fragment>
                                            <div className="langarea hidden-xs hidden-sm wow fadeInUp">
                                                <div className="dropdown">
                                                    <button className="dropbtn">
                                                        {localStorage.getItem("name")}
                                                    </button>
                                                    <div className="dropdown-content">
                                                        <NavLink to="/uploadFile">
                                                            Upload file
                                                        </NavLink>
                                                        <NavLink to="/myFile">My files</NavLink>
                                                        <NavLink to="/" onClick={this.logout}>
                                                            Logout
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="hidden-xs hidden-sm wow fadeInUp">
                                                <div>
                                                    <li>
                                                        <NavLink exact to="/">
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/premium">Premium</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact">Contact Us</NavLink>
                                                    </li>
                                                </div>
                                            </ul>
                                        </Fragment>
                                    )}
                                    {!this.state.isLogin && (
                                        <ul className="hidden-xs hidden-sm wow fadeInUp">
                                            <div>
                                                <li>
                                                    <NavLink exact to="/">
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/login">Login</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/signUp">Sign Up</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/premium">Premium</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/contact">Contact Us</NavLink>
                                                </li>
                                            </div>
                                        </ul>
                                    )}
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default NavBar;
