import React, { Component } from 'react';
import Logo from '../images/logo.png';

class Navigation extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<nav>
					<img src={Logo} alt="" />
					<ul className="menu">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About Mansard</a></li>
						<li><a href="/gallery">Gallery </a></li>
						<li><a href="#">Read My Blog</a></li>
						<li><a href="/book-session">Book a Session</a></li>
						<li><a href="/contact">Contact Us</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Navigation;