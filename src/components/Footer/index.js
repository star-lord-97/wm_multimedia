import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="footermenu wow fadeInUp">
                                <ul>
                                    <li>
                                        <NavLink exact to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/premium">Premium</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq">FAQ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/TermsService">Terms of service</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/news">News</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Privacy policy">Privacy policy</NavLink>
                                    </li>
                                </ul>

                                <div className="clearfix"></div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="mailinfo wow fadeInUp">
                                <a href="#" title="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" title="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" title="youtube">
                                    <i className="fa fa-youtube"></i>
                                </a>
                                <a href="#" title="google">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a href="#" title="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bord"></div>
                    <div className="copyrights wow fadeInUp">
                        All rights reserved to{" "}
                        <a href="#" title="AHMED">
                            Safebox Team
                        </a>{" "}
                        © 2020
                    </div>

                    <div className="mngez wow fadeInUp">
                        <a href="#" rel="nofollow">
                            Designed By : <img src="./vendor/images/water.png" alt="image footer" />
                            Safebox Team Designer
                        </a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </footer>
        );
    }
}
export default Footer;
