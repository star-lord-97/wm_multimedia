import React, { Component, Fragment } from "react";
import NavBar from "../navigation_bar";

class News extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div id="wrapper">
                    <div className="container">
                        <div className="newspage">
                            <div className="title">News</div>
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                                        <div className="item">
                                            <a href="###" title="news"></a>
                                            <div className="content">
                                                Welcom To section News of <strong>Safebox</strong>{" "}
                                                :)
                                            </div>
                                        </div>
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
export default News;
