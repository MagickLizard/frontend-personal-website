import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Card from './components/Common/Card';
import Circle from './components/Common/Circle';

const Gradient = styled.section`
	position: relative;
	width: 100%;
	background-image: linear-gradient(#fffcec, rgb(244, 213, 248)) !important;
	oppacity: 50%;
`;

const BackgroundLayout = ({ content }) => {
	return (
		<div className='container is-widescreen'>
			<div className='columns'>
				<Circle size={'small'} />
				<Circle />
				<Circle size={'large'} />
				<Circle />
				{content}
			</div>
		</div>
	);
};
const App = () => {
	return (
		<div className='App'>
			<Gradient className='hero is-primary is-fullheight has-background hero-background'>
				<Header />
				<BackgroundLayout />
			</Gradient>
		</div>
	);
};
export default App;
