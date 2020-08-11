import React, { Component, Fragment } from "react";
import NavBar from "../navigation_bar";
import axios from "axios";
class MyFile extends Component {
    state = {
        dataItems: [],
    };
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({
                dataItems: response.data,
            });
        });
    }
    render() {
        const data_items = this.state.dataItems.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                </tr>
            );
        });
        return (
            <Fragment>
                <NavBar />
                <div id="wrapper">
                    <div className="container">
                        <h2 id="select_file" className="current lol">
                            My File
                        </h2>
                        <div className="uploadformpage wow fadeInUp">
                            <div className="section">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>File Name</th>
                                            <th>Link</th>
                                            <th>Action</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>{data_items}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default MyFile;
