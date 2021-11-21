import React, { Component } from 'react';
import Img1 from '../images/1.png';
import Img2 from '../images/2.png';
import Img3 from '../images/3.png';
import Img4 from '../images/4.png';

class HomeBottomSlider extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div className="container" style={{width:'100%', backgroundColor: '#cee0c1'}}>
					<div className="strip-carousel" id="mostviewed">
						<div className="arrow-left">&lsaquo;</div>
						<div className="arrow-right">&rsaquo;</div>
						<div className="frames">
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img1} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img2} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img3} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img4} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img1} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img2} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img3} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img4} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img1} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img2} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img3} alt="" /></div>
							</a>
							<a href="javascript:void(0)">
								<div className="frame"><img src={Img4} alt="" /></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default HomeBottomSlider;