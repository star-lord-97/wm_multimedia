
import React, { Component, Fragment } from 'react'
import NavBar from '../navigation_bar';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class ContactUs extends Component {

    state = {
        name:'',
        email:'',
        message:'',
        errors: {
            name:'',
            email:'',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':    
                errors.name =value.length == 0 ? '': value.length < 5 ?'Full Name must be at least 5 characters long!(Please Rewrite The Name)':'';
                break;
            case 'email': 
                errors.email =value.length == 0 ?'': validEmailRegex.test(value) ? '':'Email is not valid!(Must Contain @ ,.com)';
                break;
        }
        this.setState({errors, [name]: value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            name: '',
            email:'',
            message:'',
        });  
        console.log(this.state);
    }

    render() {
        const {errors} = this.state;
        return (
            <Fragment>
                <NavBar/> 
                    <div id="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
                                    <div id="contactus">

                                        <div className="title">Contact Us</div>
                                        <div className="content">
                                            
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="name"><i className="fa fa-user"></i></span>
                                                    <input type="text" name="name" className="form-control" placeholder="Name" autoComplete="off" required onChange={this.handleChange} value={this.state.name}/>
                                                </div>
                                                {errors.name.length > 0 && <span className='error'>{errors.name}</span>} 

                                                <div className="input-group">
                                                    <span className="input-group-addon" id="email"><i className="fa fa-envelope"></i></span>
                                                    <input type="text" name="email" className="form-control" placeholder="E-mail" required onChange={this.handleChange} value={this.state.email}/>
                                                </div>
                                                {errors.email.length > 0 &&<span className='error'>{errors.email}</span>}

                                                <div className="input-group">
                                                    <span className="input-group-addon" id="message"><i className="fa fa-file-text"></i></span>
                                                    <textarea id="message" name="message" className="form-control"  rows="7" required onChange={this.handleChange} value={this.state.message}></textarea>
                                                </div>
                                                
                                                <input name="send" type="submit" name="btn" value="Send Message"/>
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
} export default ContactUs;
