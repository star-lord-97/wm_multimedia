import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/login";
import ContactUs from "./components/contact_us";
import SignUp from "./components/sign_up";
import Footer from "./components/Footer";
import Upload from "./components/upload";
import MyFile from "./components/MyFile";
import Premium from "./components/Premium";
import Faq from "./components/FAQ";
import Privacy from "./components/Privacy_policy";
import Terms_of_Service from "./components/Terms_of_Service";
import ForgotPassword from "./components/ForgotPassword";
import News from "./components/News";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/premium" component={Premium} />
                <Route path="/uploadFile" component={Upload} />
                <Route path="/myFile" component={MyFile} />
                <Route path="/forgotpass" component={ForgotPassword} />
                <Route path="/faq" component={Faq} />
                <Route path="/news" component={News} />
                <Route path="/Privacy policy" component={Privacy} />
                <Route path="/TermsService" component={Terms_of_Service} />
                <Footer />
            </BrowserRouter>
        );
    }
}
export default App;
