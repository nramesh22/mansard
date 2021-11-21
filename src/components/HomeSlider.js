import React, { Component } from 'react';
import homepageImg from '../images/homepage.jpg';

import _DSC8065 from '../images/gallery/family/_DSC8065.jpg';
import _DSC3987 from '../images/gallery/landscape/_DSC3987.jpg';
import _DSC8145 from '../images/gallery/nature/_DSC8145.jpg';
import DSC08395 from '../images/gallery/street_photography/DSC08395.jpg';
import _DSC5677 from '../images/gallery/wildlife/_DSC5677.jpg';

class HomeSlider extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div className="slider">
					<div className="slider__slide slider__slide--active" data-slide="1">
						<div className="slider__wrap">
							<div className="slider__back" style={{backgroundImage: 'url('+ _DSC8065 +')'}}></div>
						</div>
						<div className="slider__inner" style={{backgroundImage: 'url('+ _DSC8065 +')'}}>
							<div className="slider__content">
								<h1>Family, Children and Babies</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</p>
								<a className="go-to-next">next</a>
							</div>
						</div>
					</div>
					<div className="slider__slide" data-slide="2">
						<div className="slider__wrap">
							<div className="slider__back" style={{backgroundImage: 'url('+ _DSC3987 +')'}}></div>
						</div>
						<div className="slider__inner" style={{backgroundImage: 'url('+ _DSC3987 +')'}}>
							<div className="slider__content">
								<h1>Landscape</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</p>
								<a className="go-to-next">next</a>
							</div>
						</div>
					</div>
					<div className="slider__slide" data-slide="3">
						<div className="slider__wrap">
							<div className="slider__back" style={{backgroundImage: 'url('+ _DSC8145 +')'}} ></div>
						</div>
						<div className="slider__inner" style={{backgroundImage: 'url('+ _DSC8145 +')'}} >
							<div className="slider__content">
								<h1>Nature</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</p>
								<a className="go-to-next">next</a>
							</div>
						</div>
					</div>
					<div className="slider__slide" data-slide="4">
						<div className="slider__wrap">
							<div className="slider__back" style={{backgroundImage: 'url('+ DSC08395 +')'}} ></div>
						</div>
						<div className="slider__inner" style={{backgroundImage: 'url('+ DSC08395 +')'}} >
							<div className="slider__content">
								<h1>Street Photography</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</p>
								<a className="go-to-next">next</a>
							</div>
						</div>
					</div>
					<div className="slider__slide" data-slide="5">
						<div className="slider__wrap">
							<div className="slider__back" style={{backgroundImage: 'url('+ _DSC5677 +')'}} ></div>
						</div>
						<div className="slider__inner" style={{backgroundImage: 'url('+ _DSC5677 +')'}} >
							<div className="slider__content">
								<h1>Wildlife</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</p>
								<a className="go-to-next">next</a>
							</div>
						</div>
					</div>
					<div className="slider__indicators"></div>
				</div>
			</div>
		);
	}
}
export default HomeSlider;