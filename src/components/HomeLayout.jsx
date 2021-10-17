import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Common/Card';
import Circle from './Common/Circle';
import Emoji from './Common/Emoji';

const EmojiContainer = styled.div(
	() => css`
		@keyframes wave-animation {
			0%,
			100% {
				transform: rotate(0deg);
			}
			50% {
				transform: rotate(30deg);
			}
		}
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
		@media only screen and (min-width: 1080px) {
			animation: wave-animation 1s 10 ease-in-out;
			animation-play-state: running;
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

const ContentBody = styled.div`
	position: absolute;
	top: 0;
	max-width: 800px;
	padding-left: 20px;
	align-items: center;
	padding-top: -5px;
	padding: 30px;
	font-size: 16px;
	flex-wrap: wrap;
	margin-left: 120px;
	z-index: 4;
	flex-direction: 28px;
	@media only screen and (min-width: 0px) and (max-width: 1080px) {
		background-color: white;
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
    color: #f2edde;
    max-width: 100%;
    position: relative;
    top: inherit;
				border-radius: 50px;
				display: flex;
				position: fixed;
    top: 345px;
				margin-left: 0;
				width: 100%;
			}
	}
`;

const Header = styled.div`
	color: #6955b5;
	top: 42px;
	@media only screen and (min-width: 1080px) {
		font-size: 40px;
		max-width: 800px;
		width: 800px;
	}
}
`;

const Body = styled.div`
	color: #7b00ff;
	@media only screen and (min-width: 1080px) {
		font-size: 25px;
		max-width: 600px;
		width: 100%;
	}
	padding-top: -5px;
	margin-left: 40px;
	float: right;
	padding-bottom: 20px;
	padding-top: 20px;
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

const HomeLayout = () => {
	const contentHeading = '[ Software Developer, Engineer, Person ]';
	const content = '() => { fixing and understanding problems };';
	return (
		<div className='container is-widescreen'>
			<div className='columns'>
				<Circle size={'small'} />
				<Circle />
				<div className='container'>
					<Circle size={'large'} />
				</div>
				<Circle />
			</div>
			<ContentBody>
				<Header> {contentHeading} </Header>
				<Body> {content} </Body>
			</ContentBody>
			<CardContainer>
				<Card content={CardContent()} />
			</CardContainer>
			{/* <ExperienceList /> */}
		</div>
	);
};
export default HomeLayout;
