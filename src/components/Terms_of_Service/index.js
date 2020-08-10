

import React, { Component, Fragment } from 'react'
import NavBar from '../navigation_bar';

class Terms_of_Service extends Component{
    render(){
        return (
            <Fragment>
                <NavBar/>

                <div id="wrapper">
                    <div className="container">
                        <div className="InnerHolder">
                            <h2 className="head">Terms of Service</h2>
                            <br/>
                           <p> <strong>Safebox</strong> Service Agreement (the "Agreement") 
                            describes the terms and conditions on which <strong>Safebox</strong>("we") 
                            offer services to you ("User"). By using our services, User agrees to be bound by the following terms and conditions:</p>

                            <ul> 
                                <li>We reserve the right to disable direct linking on user accounts that are using excessive bandwidth or otherwise abusing the system.</li><br/><br/>

                                
                                <li>Pornography, nudity, sexual images and any kind offensive images or videos are prohibited. Copyrighted material are also strictly prohibited
                                    . We reserve the right to decide appropriate content and can delete images or videos at any time without User notification.</li><br/><br/>

                                
                                <li>Users must agree to comply with all laws which apply to their location, including copyright and trademark laws. Images, videos and files 
                                    that violate copyrights or trademarks are not allowed. If someone has an infringement claim against you, you will be asked to remove the 
                                    copyrighted file until the issue is resolved. If there is a dispute between participants on this site, <strong>Safebox</strong>
                                     is under no obligation to become involved.</li><br/><br/>

                                
                                <li><strong>Safebox</strong>is not liable for your images, videos or files or any lost business due to the unavailability or 
                                    loss of the website. We make no claims of future reliability in serving, hosting or storing your images, videos or files.</li><br/><br/>

                            </ul>
                            <br/>
                            <p> <strong>Safebox</strong> is commited to cooperate with any and all legal authorities if an investigation should arise.</p>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
               </div>
               </Fragment>
        )
    }
} 
export default Terms_of_Service;
