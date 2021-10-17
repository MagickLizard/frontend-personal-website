import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HomeLayout from './components/HomeLayout';

const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(#ffffff,rgb(235 225 251)) !important;
	oppacity: 50%;
`;

const App = () => {
	return (
		<div className='App'>
			<Gradient className='hero is-primary is-fullheight has-background hero-background'>
				<Header />
				<HomeLayout />
			</Gradient>
		</div>
	);
};
export default App;
