import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Common/Card';
import Circle from './Common/Circle';
import Emoji from './Common/Emoji';

const EmojiContainer = styled.div(
	({ size }) => css`
		font-size: 36px;
		position: absolute;
		top: 18px;
		float: right;
		padding-right: 8px;
		@media only screen and (min-width: 0px) and (max-width: 1080px) {
			width: 100%;
			position: sticky;
			top: initial;
			float: none;
		}
	`
);

const CardContainer = styled.div`
	position: absolute;
	display: block;
	width: 21%;
	float: left;
	top: 230px;
	@media only screen and (min-width: 0px) and (max-width: 1080px) {
		width: 100%;
		top: 100px;
		position: fixed;
	}
`;

const CardContent = () => (
	<div>
		<h2>Hello</h2>
		<div className='columns'>
			<div className='column is-9'>
				<h1>I'm Lizzie</h1>
			</div>
			<div className='column'>
				<EmojiContainer>
					<Emoji label='waving hand' symbol='👋' />
				</EmojiContainer>
			</div>
		</div>
	</div>
);

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
			<CardContainer>
				<Card content={CardContent()} />
			</CardContainer>
		</div>
	);
};
export default BackgroundLayout;
