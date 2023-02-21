import React, { Component } from 'react';
import Message from './components/HomeLayout';
import ExperienceList from './components/Experience/ExperienceList';
import Header from './components/Header/Header';
import './App.scss';

import styled from 'styled-components';

const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(
		${(props) => props.background}deg,
		#ffa2bc,
		#b97aec
	) !important;
	}
`
class App extends Component {
	state = { x: 0, y: 0, direction: '', loading: false }
	_onMouseMove(event) {
		this.setState({ x: event.screenX, y: event.screenY })
	}
	render() {
		return (
			<div className='App'>
				<div
					className={`control ${
						this.state.loading ? 'is-large is-loading' : ''
					}`}
				>
					<Gradient
						className='hero is-primary is-fullheight has-background hero-background'
						onMouseMove={this._onMouseMove.bind(this)}
						background={this.state.y}
					>
     <Header />
						<Message/>
					</Gradient>
				</div>
			</div>
		)
	}
}
export default App;
