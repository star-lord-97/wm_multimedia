import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../navigation_bar";

class Faq extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div id="wrapper">
                    <div className="container">
                        <div className="InnerHolder">
                            <h2 className="head">FAQ</h2>
                            <ul>
                                <li>
                                    <b>
                                        What is <strong>Safebox</strong> ?
                                    </b>
                                </li>
                                <br />
                                <br />
                                <strong>Safebox</strong> is a file hosting provider. We offer online
                                storage/remote backup capacity, sophisticated uploading and
                                downloading tools.
                                <br />
                                With <strong>Safebox</strong> you can host files, images, videos,
                                audio and flash on the same place.
                                <br />
                                <br />
                                <li>
                                    <b>
                                        Why should I use <strong>Safebox</strong> ?
                                    </b>
                                </li>
                                <br />
                                <br />
                                Whenever you need to send a file that is too large for e-mail,{" "}
                                <strong>Safebox</strong> can help. If you need secure remote storage
                                capacity for off-site backups, <strong>Safebox</strong> offers
                                solutions for you. If you want to access personal data from a
                                variety of computers and don't want to carry around a USB stick,{" "}
                                <strong>Safebox</strong> is a perfect way of doing so.
                                <br />
                                <br />
                                <li>
                                    <b>Can I search for files other people uploaded?</b>
                                </li>
                                <br />
                                <br />
                                No, because not everyone wishes to share the files they upload with
                                everyone else. This way <strong>Safebox</strong> can be used to
                                share files with anyone you choose to, as well as keep it for
                                yourself as a backup or to download from anywhere in the world.
                                <br />
                                <br />
                                <li>
                                    <b>What kind of files can be uploaded?</b>
                                </li>
                                <br />
                                <br />
                                All kinds: from your party photos to an important document. The only
                                restrictions are for pornography, nudity, sexual images and any kind
                                offensive material, and, of course, copyrighted material.
                                <br />
                                Please refer to our <NavLink to="/TermsService">TOS</NavLink> for
                                more info on <strong>Safebox</strong> terms of service.
                                <br />
                                <br />
                                <li>
                                    <b>How to delete a file I uploaded?</b>
                                </li>
                                <br />
                                <br />
                                To delete a file you uploaded you must use Delete Link that was
                                provided to you after the upload proccess.
                                <br />
                                If you lost your removal code you can simply wait until the file
                                expires so it will be automatically removed from our site.
                                <br />
                                <br />
                                <li>
                                    <b>Can I hotlink the stuff I upload?</b>
                                </li>
                                <br />
                                <br />
                                No. Hotlinking is not allowed on any kind of files uploaded to our
                                servers.
                                <br />
                                <br />
                                <li>
                                    <b>I still have questions, what should I do?</b>
                                </li>
                                <br />
                                <br />
                                If you still have questions regarding our services don't hesitate to
                                contact us using our <NavLink to="/contact">Contact Us</NavLink>.
                            </ul>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Faq;
