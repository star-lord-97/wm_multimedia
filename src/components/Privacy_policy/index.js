import React, { Component, Fragment } from 'react'
import NavBar from '../navigation_bar';

class Privacy  extends Component {
    render() {
        return (

            <Fragment>
             <NavBar/> 
                
            <div id="wrapper">
                <div className="container">
                    <h2 className="head">Privacy policy</h2>
                        <br/>
                    <div className="privacy">
                    
                    <strong>The personal data that is going to be collected by Safebox service:</strong>            
                    <ol>
                        <li>1. IP address</li>
                        <li>2. Operating system and browser type</li>
                        <li>3. Cookies</li>
                        <li>4. Login, e-mail address, phone and any other data that may be explicitly supplied by user</li>
                        <li>5. Uploaded and downloaded files</li>
                        <li>6. Any other actions performed while using the site</li>
                    </ol>
                    
                    <br/>

                    <strong>Purposes of collecting the personal data:</strong>            
                    <ol>
                        <li>1. Site metrics</li>
                        <li>2. Advertising system</li>
                        <li>3. Providing an access to private part associated with specific user</li>
                        <li>4. Sending site news</li>
                        <li>5. Improving user experience</li>
                    </ol>

                    <br/>

                    <strong>Legal basis for data processing:</strong>
                    <p>We require a prior user's consent before starting any data processing on <strong>Safebox</strong>.</p>

                    <br/>

                    <strong>How long do we store the personal data:</strong>
                    <p>We store the personal data until a deletion request from user or a deletion on behalf of site's administrator.</p>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Privacy;