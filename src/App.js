import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
import './css/bootstrap.min.css';
import './css/form.css';
import './css/style.css';
import './css/strip.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import BookASession from './components/BookASession';
import Gallery from './components/Gallery';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LandscapeGallery from './components/ImageGallery/LandscapeGallery';
import NatureGallery from './components/ImageGallery/NatureGallery';
import StreetGallery from './components/ImageGallery/StreetGallery';
import WildlifeGallery from './components/ImageGallery/WildlifeGallery';
import ThankContact from './components/ThankContact';
import ThankSession from './components/ThankSession';

class App extends Component{

	render() {
		return (
			<Router>
			<div className="App">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={Aboutus} />
					<Route exact path='/contact' component={Contactus} />
					<Route exact path='/book-session' component={BookASession} />
					<Route exact path='/gallery-old' component={Gallery} />
					<Route exact path='/gallery' component={ImageGallery} />
					<Route exact path='/gallery/landscape' component={LandscapeGallery} />
					<Route exact path='/gallery/nature' component={NatureGallery} />
					<Route exact path='/gallery/street' component={StreetGallery} />
					<Route exact path='/gallery/wild' component={WildlifeGallery} />
					<Route exact path='/contact-success' component={ThankContact} />
					<Route exact path='/session-thanks' component={ThankSession} />
				</Switch>
				<Footer />
			</div>
			</Router>
		);
	}
}

export default App;
