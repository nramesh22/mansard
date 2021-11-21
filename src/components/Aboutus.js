import React, { Component } from 'react';
import Navigation from './Navigation';

class Aboutus extends Component {
	
	componentDidMount(){
		document.title = "About Us :: Mansard Photography";
	}
	
	render() {
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<div className="content">
						<h1>About Us</h1>
						<p style={{textAlign: 'justify'}}>
							With a varied passion in the arts such photography, writing, painting, drawing, video creations, cooking and so much more, we hope to capture unique and unforgettable moments
							. We are inspired by the many holiday movies and strive to have some of our photographs represent ‘a little touch of holiday magic!’ Our love for the outdoors especially 
							during the four seasons is captured with the help of nature’s beauty. One thing is for sure, our goal is to capture photos that are definitely worth sharing.
						</p>
						<p style={{textAlign: 'justify'}}>
							Mansard Photography is an Ottawa, Ontario based company. We offer sessions at our home studio in Orleans or outdoors in and around the Ottawa area. We specialize in Portrait,
							Landscape and Street Photography.
						</p>
						<p style={{textAlign: 'justify'}}>
							Here at Mansard Photography, we believe in capturing your special moments and the beauty that comes with it. We love capturing photos that are both unique and worth sharing.
						</p>
						<p style={{textAlign: 'justify'}}>
							We want to be apart of your memories by capturing what is special to you.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Aboutus;