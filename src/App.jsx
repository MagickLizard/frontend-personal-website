import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Message from './components/Message/Message'
import ImageList from './components/IconList/iconList'
import ExperienceList from './components/Experience/ExperienceList'
import YoutubeSection from './components/Youtube/YoutubeSection'
import { hot } from 'react-hot-loader/root'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image-loading'
import './App.scss'
import background from './img/background3small.jpg'

import styled from 'styled-components'
const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(
		${(props) => props.background}deg,
		#ffa2bc,
		#b97aec
	) !important;
	h1 {
		font-size: 40px;
		-webkit-transition: 0.5s 0.1s;
		-webkit-background-clip: text;
		cursor: pointer;

		&:hover {
			color: transparent;
			transition-duration: 5s;
			transition-timing-function: linear;
			animation: smooth;
			animation-delay: 10s;
		}
	}
`
class App extends Component {
	state = { x: 0, y: 0, direction: '', loading: false }
	_onMouseMove(event) {
		this.setState({ x: event.screenX, y: event.screenY })
	}
	messageComponent = () => {
		return (
			<div className='messageSection'>
				<Message> </Message>
			</div>
		)
	}
	projectPage = () => {
		return (
          <YoutubeSection/>
          )
	}
	iconComponent = () => {
		return (
				<ImageList />
		)
	}
	experienceComponent = () => {
		return (<ExperienceList/>
		)
	}
	render() {
		return (
			<div className='App'>
				<div
					className={`control ${
						this.state.loading ? 'is-large is-loading' : ''
					}`}
				>
					<Router>
						<Gradient
							className='hero is-primary is-fullheight has-background hero-background'
							onMouseMove={this._onMouseMove.bind(this)}
							background={this.state.y}
						>
							<ProgressiveImage
								preview='/images/cat1.png'
								src={background}
								alt='background of lava'
								render={(src, style) => (
									<img
										className='img hero-background is-transparent'
										alt='background of lava'
										src={src}
										style={style}
									/>
								)}
							/>
							<Navbar />
							<Route path='/' exact component={this.messageComponent} />
							<Route path='/projects' exact component={this.projectPage} />
						</Gradient>
						<Route path='/' exact component={this.iconComponent} />
						<Route path='/' exact component={this.experienceComponent} />
					</Router>
				</div>
			</div>
		)
	}
}
export default hot(App)
