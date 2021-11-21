import React, { Component } from 'react';
import Navigation from './Navigation';

class ThankContact extends Component {
	
	componentDidMount(){
		document.title = "Enquiry :: Mansard Photography";
	}
	
	render() {
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<div className="content">
						<h1>Thank you for getting in touch!</h1>
						<p style={{textAlign: 'justify'}}>
							We appreciate you contacting us. We will get back in touch with you soon!Have a great day!
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default ThankContact;