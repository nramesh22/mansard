import React, { Component } from 'react';
import Navigation from './Navigation';
import undraw from '../images/undraw-contact.svg';
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';

const todayDate = new Date().toISOString().slice(0, 10);

class BookASession extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: '',
			lname: '',
			email: '',
			phone: '',
			bookdate: '',
			members: '',
			description: '',
			apiURL : 'http://localhost/mansard/server/',
			//apiURL : 'https://mansardphotography.ca/server/',
			isSubmit : false,
		}
		this.validator = new SimpleReactValidator({
			validators: {
				dateFormat: {  // name the rule
					message: 'The :attribute must be a valid date format(DD-MM-YYYY)',
					rule: (val, params, validator) => {
						return validator.helpers.testRegex(val,/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i)
					},
					messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
					required: true  // optional
				}
			}
		});
	}
	
	componentDidMount(){
		document.title = "Book A Session :: Mansard Photography";
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
				fname: this.state.fname,
				lname: this.state.lname,
				email: this.state.email,
				phone: this.state.phone,
				bookdate: this.state.bookdate,
				members: this.state.members,
				description: this.state.description,
			}
			
			axios.post( this.state.apiURL+'session.php', { data }).then( res =>{
				console.log(res);
				console.log(res.data);
				window.location = "/session-thanks" //This line of code will redirect you once the submission is succeed
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
								<div className="col-md-10">
									<div className="row justify-content-center">
										<div className="col-md-6">
											<h3 className="heading mb-4">Book A Session</h3>
											<p style={{textAlign: 'justify'}}>Old memories are so beautiful that sometimes we wish we could relive them and at times we may forget the smallest details. Through photographs we can relive those moments in history. It not only brings happiness but the photographs and their stories get passed on for generations to come.</p>
											<p><img src={undraw} alt="Image" className="img-fluid" /></p>
										</div>
										<div className="col-md-6">
											<form onSubmit = { this.handleSubmit }>
												<div className="row">
													<div className="col-md-6 form-group">
														<input type="text" className="form-control" name="fname" id="fname" placeholder="First name" value={this.state.fname} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('fname', this.state.fname, 'required|alpha_space')}
													</div>
													<div className="col-md-6 form-group">
														<input type="text" className="form-control" name="lname" id="lname" placeholder="Last name" value={this.state.lname} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('lname', this.state.lname, 'required|alpha_space')}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 form-group">
														<input type="text" className="form-control" name="email" id="email" placeholder="Email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('email', this.state.email, 'required|email')}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 form-group">
														<input type="text" className="form-control" name="phone" id="phone" placeholder="Phone No." value={this.state.phone} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('phone', this.state.phone, 'required|phone')}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 form-group">
														<label>What time of day are you wanting to book?</label>
														<input type="date" className="form-control" name="bookdate" id="bookdate" min={todayDate} value={this.state.bookdate} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('bookdate', this.state.bookdate, 'required|dateFormat')}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 form-group">
														<label>How many family members will be attending the session?</label>
														<input type="number" className="form-control" name="members" id="members" value={this.state.members} onChange={(event) => this.handleUserInput(event)} />
														{this.validator.message('members', this.state.members, 'required|numeric')}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 form-group">
														<label>Name of each family member attending and children (s) ages</label>
														<textarea className="form-control" name="description" id="description" cols="30" rows="7" onChange={(event) => this.handleUserInput(event)} >{this.state.description}</textarea>
														{this.validator.message('description', this.state.description, 'required')}
													</div>
												</div>
												<div className="row">
													<div className="col-12">
														<input type="submit" value="Send" className="btn btn-success rounded-0 py-2 px-4" disabled={this.state.isSubmit} />
														<span className="submitting"></span>
													</div>
												</div>
											</form>

											<div id="form-message-warning mt-4"></div>
											<div id="form-message-success">
												Your message was sent, thank you!
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
export default BookASession;