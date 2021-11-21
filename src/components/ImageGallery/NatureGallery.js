import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Navigation from '../Navigation';
import '../../css/swipebox.css';

import _DSC8065 from '../../images/gallery/family/_DSC8065.jpg';
import _DSC3987 from '../../images/gallery/landscape/_DSC3987.jpg';
import DSC08395 from '../../images/gallery/street_photography/DSC08395.jpg';
import _DSC5677 from '../../images/gallery/wildlife/_DSC5677.jpg';

import _DSC8145 from '../../images/gallery/nature/_DSC8145.jpg';
import DSC01394 from '../../images/gallery/nature/DSC01394.jpg';
import DSC06397 from '../../images/gallery/nature/DSC06397.jpg';
import DSC08480 from '../../images/gallery/nature/DSC08480.jpg';
import DSC08569 from '../../images/gallery/nature/DSC08569.jpg';
import P29 from '../../images/gallery/nature/P29.jpg';
import P1000374 from '../../images/gallery/nature/P1000374.jpg';
import P1000377 from '../../images/gallery/nature/P1000377.jpg';
import P1080575 from '../../images/gallery/nature/P1080575.jpg';

const images = [
    _DSC8145,
	DSC01394,
	DSC06397,
	DSC08480,
	DSC08569,
	P29,
	P1000374,
	P1000377,
	P1080575,
]

class NatureGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoIndex: 0,
			isOpen: false
		};
	}
	
	componentDidMount(){
		document.title = "Nature :: Mansard Photography";
	}
	
	render() {
		const { photoIndex, isOpen } = this.state;
		return (
			<div>
				<div className="wrapper">
					<Navigation />
					<div className="content galleryContent">
						<div className="galleryContainer">
							<div className="galleryPics">
								<Masonry columnsCount={3} gutter="10px">
									{images.map((image, i) => (
										<img
											key={i}
											src={image}
											style={{width: "100%", display: "block", cursor: "pointer"}}
											onClick={() => this.setState({ photoIndex: i, isOpen: true })}
										/>
									))}
								</Masonry>
								{isOpen && (
									<Lightbox
										mainSrc={images[photoIndex]}
										nextSrc={images[(photoIndex + 1) % images.length]}
										prevSrc={images[(photoIndex + images.length - 1) % images.length]}
										onCloseRequest={() => this.setState({ isOpen: false })}
										onMovePrevRequest={() =>
											this.setState({
												photoIndex: (photoIndex + images.length - 1) % images.length
											})
										}
										onMoveNextRequest={() =>
											this.setState({
												photoIndex: (photoIndex + 1) % images.length
											})
										}
									/>
								)}
							</div>
							<div className="galleryAlbum">
								<ul className="albums">
									<li className="albumBox">
										<a href="/gallery" className="" title="Fog" rel="gallery">
											<img src={_DSC8065} alt="image" />
											<span>Family, Children and Babies</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="/gallery/landscape" className="" title="City" rel="gallery">
											<img src={_DSC3987} alt="image" />
											<span>Landscape</span>
										</a>
									</li>
									<li className="albumBox active">
										<a href="/gallery/nature" className="" title="Street" rel="gallery">
											<img src={_DSC8145} alt="image" />
											<span>Nature</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="/gallery/street" className="" title="Mustache Guy" rel="gallery">
											<img src={DSC08395} alt="image" />
											<span>Street Photography</span>
										</a>
									</li>
									<li className="albumBox">
										<a href="/gallery/wild" className="" title="Mustache Guy" rel="gallery">
											<img src={_DSC5677} alt="image" />
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
export default NatureGallery;