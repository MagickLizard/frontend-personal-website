import React, { Component } from 'react'
import './App.scss'

import styled from 'styled-components'
const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(
		#fffcec,
		#ffbcec
	) !important;
	oppacity: 50%;
`
class App extends Component {
	state = { loading: true }
	render() {
		return (
			<div className='App'>
						<Gradient className='hero is-primary is-fullheight has-background hero-background'>
						</Gradient>
			</div>
		)
	}
}
export default App
