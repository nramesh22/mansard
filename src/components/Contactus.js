import React, { Component } from 'react';
import Navigation from './Navigation';
import '../fonts/font-awesome.min.css';
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';

class Contactus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			apiURL : 'http://localhost/mansard/server/',
			//apiURL : 'https://mansardphotography.ca/server/',
			isSubmit : false,
		}
		this.validator = new SimpleReactValidator();
	}
	
	componentDidMount(){
		document.title = "Contact Us :: Mansard Photography";
	}
	
	handleUserInput (e) {
		const name  = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value});
	}
	
	handleSubmit = event => {
		event.preventDefault();
		if (this.validator.allValid()) {
			this.setState({isSubmit: true});
			const data = {
				name: this.state.name,
				email: this.state.email,
				subject: this.state.subject,
				message: this.state.message,
			}
			
			axios.post( this.state.apiURL+'contactus.php', { data }).then( res =>{
				console.log(res);
				console.log(res.data);
				window.location = "/contact-success" //This line of code will redirect you once the submission is succeed
			})
		} else {
			this.setState({isSubmit: false});
			this.validator.showMessages();
			// rerender to show messages for the first time
			// you can use the autoForceUpdate option to do this automatically`
			this.forceUpdate();
		}
		
	}
	
	render() {
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<div className="content galleryContent">
						<div className="container-fluid">
							<div className="row justify-content-center">
								<div className="col-lg-12 col-md-12">
									<div className="wrapper">
										<div className="row no-gutters">
											<div className="col-md-7 d-flex align-items-stretch">
												<div className="contact-wrap w-100 p-md-5 p-4">
													<h3 className="mb-4">Get in touch</h3>
													<div id="form-message-warning" className="mb-4"></div>
													<div id="form-message-success" className="mb-4">
														Your message was sent, thank you!
													</div>
													<form onSubmit = { this.handleSubmit }>
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<input type="text" className="form-control" name="name" id="name" placeholder="Name" value={this.state.name} onChange={(event) => this.handleUserInput(event)} />
																	{this.validator.message('name', this.state.name, 'required|alpha_space')}
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group">
																	<input type="email" className="form-control" name="email" id="email" placeholder="Email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
																	{this.validator.message('email', this.state.email, 'required|email')}
																</div>
															</div>
															<div className="col-md-12">
																<div className="form-group">
																	<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={this.state.subject} onChange={(event) => this.handleUserInput(event)} />
																	{this.validator.message('subject', this.state.name, 'required|alpha_space')}
																</div>
															</div>
															<div className="col-md-12">
																<div className="form-group">
																	<textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message" onChange={(event) => this.handleUserInput(event)}>{this.state.message}</textarea>
																	{this.validator.message('message', this.state.message, 'required')}
																</div>
															</div>
															<div className="col-md-12">
																<div className="form-group">
																	<input type="submit" value="Send Message" className="btn btn-success" disabled={this.state.isSubmit} />
																	<div className="submitting"></div>
																</div>
															</div>
														</div>
													</form>
												</div>
											</div>
											<div className="col-md-5 d-flex align-items-stretch">
												<div className="info-wrap bg-primary w-100 p-lg-5 p-4">
													<h3 className="mb-4 mt-md-4">Contact us</h3>
													<div className="dbox w-100 d-flex align-items-start">
														<div className="icon d-flex align-items-center justify-content-center">
															<span className="fa fa-map-marker"></span>
														</div>
														<div className="text pl-3">
															<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
														</div>
													</div>
													<div className="dbox w-100 d-flex align-items-center">
														<div className="icon d-flex align-items-center justify-content-center">
															<span className="fa fa-phone"></span>
														</div>
														<div className="text pl-3">
															<p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
														</div>
													</div>
													<div className="dbox w-100 d-flex align-items-center">
														<div className="icon d-flex align-items-center justify-content-center">
															<span className="fa fa-paper-plane"></span>
														</div>
														<div className="text pl-3">
															<p><span>Email:</span> 
															<a href="mailto:mansardphotography@gmail.com"> mansardphotography@gmail.com</a></p>
														</div>
													</div>
													<div className="dbox w-100 d-flex align-items-center">
														<div className="icon d-flex align-items-center justify-content-center">
															<span className="fa fa-globe"></span>
														</div>
														<div className="text pl-3">
															<p><span>Website:</span> <a href="#">mansardphotography.ca</a></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Contactus;