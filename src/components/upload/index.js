
import React, { Component, Fragment } from 'react'
import NavBar from '../navigation_bar';

class Upload extends Component {

	state = {
        name:'',
		file:'',
		optradio:'',
    }

    
    handleChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            name:'',
			file:'',
        });  
        console.log(this.state);    
    }
	
    render() {
        return (
            <Fragment>
				<NavBar/>
				<div id="wrapper">
					<div className="container">
						<div className="uploadformpage wow fadeInUp">	
							<div className="section">
								<ul className="tabs">
									<li id="select_file" className="current"><i className="fa fa-cloud-upload"></i>File upload</li>
								</ul>
								<div className="uploadtab box visible" id="file_upload">
									<div className="tabcontent">										
										
										<form onSubmit={this.handleSubmit}>
											
											<div className="input-group">
												<span className="input-group-addon" id="message"><i className="fa fa-file-text"></i></span>
												<input type="text" name="name" className="form-control" placeholder="Please Write Here Name Of your File" required onChange={this.handleChange} value={this.state.name}/>
                                            </div>	
											
											<div className="uploadfile">
												<div className="browsebtn">
													<input type="file" multiple="multiple"  className="uploadbtn" name ='file' required onChange={this.handleChange} value={this.state.file}/>
													<i className="fa fa-cloud-upload"></i>
													<span>Drop the file here or click to upload</span>
												</div>
											</div>
											
											<div className ='XD'>
												<h2 className='visibiltyLeft'>Visibility</h2>
												<input type="radio"  name="optradio" value ='Public'defaultChecked onChange={this.handleChange}/> Public
												<input type="radio"  name="optradio" value ='Private' onChange={this.handleChange} /> Private
											</div>
											
											<input type="submit" className='sub' name="btn" value="Submit"/>									
										</form>
									</div>
								</div>											
							</div>
						</div>
					</div>
				</div>
            </Fragment>
        ) 
    }
}

export default Upload;