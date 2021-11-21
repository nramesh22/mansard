import React, { Component } from 'react';
import Navigation from './Navigation';
import HomeSlider from './HomeSlider';
import HomeBottomSlider from './HomeBottomSlider';

class Home extends Component{
	
	componentDidMount(){
		document.title = "Welcome to Mansard Photography";
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<HomeSlider />
				</div>
				<HomeBottomSlider />
			</div>
		);
	}
}

export default Home;
