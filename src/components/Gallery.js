import React, { Component } from 'react';
import Navigation from './Navigation';
import '../css/style.css';
import '../css/strip.css';
import '../css/swipebox.css';
import small1 from '../images/gallery/small-1.jpg';
import small2 from '../images/gallery/small-2.jpg';
import small3 from '../images/gallery/small-3.jpg';
import small4 from '../images/gallery/small-4.jpg';
import big1 from '../images/gallery/big-1.jpg';
import big2 from '../images/gallery/big-2.jpg';
import big3 from '../images/gallery/big-3.jpg';
import big4 from '../images/gallery/big-4.jpg';

import _DSC8065 from '../images/gallery/family/_DSC8065.jpg';
import _DSC8067 from '../images/gallery/family/_DSC8067.jpg';
import _DSC8244 from '../images/gallery/family/_DSC8244.jpg';
import _DSC8254 from '../images/gallery/family/_DSC8254.jpg';
import _DSC8258 from '../images/gallery/family/_DSC8258.jpg';
import _DSC8260 from '../images/gallery/family/_DSC8260.jpg';
import _DSC8271 from '../images/gallery/family/_DSC8271.jpg';
import DSC04538 from '../images/gallery/family/DSC04538.jpg';

class Gallery extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		document.title = "Gallery :: Mansard Photography";
	}
	
	render() {
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<div className="content galleryContent">
						<div className="galleryContainer">
							<div className="galleryPics">
								<ul id="box-container">
									<li className="box">
										<a href={_DSC8065} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8065} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8067} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8067} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8254} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8254} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8258} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8258} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8244} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8244} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8260} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8260} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={_DSC8271} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={_DSC8271} alt="image" />
										</a>
									</li>
									<li className="box">
										<a href={DSC04538} className="swipebox" title="Family, Children and Babies" rel="gallery">
											<img src={DSC04538} alt="image" />
										</a>
									</li>
								</ul>
							</div>
							<div className="galleryAlbum">
								<ul className="albums">
									<li className="albumBox active">
										<a href="#" className="" title="Fog" rel="gallery">
											<img src={small1} alt="image" />
											<span>Family, Children and Babies</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="#" className="" title="City" rel="gallery">
											<img src={small2} alt="image" />
											<span>Landscape</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="#" className="" title="Street" rel="gallery">
											<img src={small3} alt="image" />
											<span>Nature</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="#" className="" title="Mustache Guy" rel="gallery">
											<img src={small4} alt="image" />
											<span>Street Photography</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="#" className="" title="Mustache Guy" rel="gallery">
											<img src={small4} alt="image" />
											<span>Wildlife</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Gallery;