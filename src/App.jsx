import React from 'react'
import './App.scss'
import styled from 'styled-components'
import Header from './components/Header/Header'

const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(
		#fffcec,
		rgb(244, 213, 248)
	) !important;
	oppacity: 50%;
`
const App = () => {
		return (
			<div className='App'>
						<Gradient className='hero is-primary is-fullheight has-background hero-background'>
							<Header/>
						</Gradient>
			</div>
		)
}
export default App
