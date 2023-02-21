import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Common/Card';
import ImageOfMe from '../img/mequality.jpg';
import Icon from './Common/Icon';
import Emoji from './Common/Emoji';
const WaveEmojiContainer = styled.div(
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
			animation: wave-animation 1s 20 ease-in-out;
			animation-play-state: running;
		}
	`
)
const CardExtended = styled.div(
	() => css`
		&:after {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			width: 0;
			height: 0;
			border: 30px solid transparent;
			border-right-color: #ffd1f5;
			border-left: 0;
			border-bottom: 0;
			margin-top: -15px;
			margin-left: -30px;
		}
	`
)

const CardContent = (
	<CardExtended className='column is-6'>
		<h2>Hello</h2>
		<div className='columns'>
			<div className='column is-5'>
				<h1>I'm Lizzie</h1>
			</div>
			<div className='column'>
				<WaveEmojiContainer>
					<Emoji label='waving hand' symbol='👋' />
				</WaveEmojiContainer>
			</div>
		</div>
	</CardExtended>
)

const HomeLayout = () => {
	return (
		<div className='container is-widescreen is-offset-1'>
			<section class='hero is-halfheight'>
				<div class='hero-body container'>
					<div className='column is-3'>
						<figure className='image is-296x296'>
							<img className='is-rounded imageOfMe' src={ImageOfMe} alt='me' />
						</figure>
					</div>
					<div className='column is-5'>
						<Card content={CardContent} />
						<div className='columns'>
							<a className='linkMessage' href='https://github.com/MagickLizard'>
								<Icon name='fab fa-github'/>
							</a>
       <a className='linkMessage' href='https://www.linkedin.com/in/elizabeth-king-11a978a2/'>
       <Icon name='fab fa-linkedin' />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export default HomeLayout;
