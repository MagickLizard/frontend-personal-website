import React from 'react'
import './iconList.scss'
import Icon from './Icon/Icon'

class IconList extends React.Component {
	listOfIcons() {
		return (
			<section className='section'>
				<div className='container'>
					<h2 className='title heroTitle'>Tech stack</h2>
				</div>
				<section className='section'>
					<div className='columns is-flex is-horizontal-center is-multiline'>
						<Icon name='fa-node'> </Icon>
						<Icon name='fa-node-js'> </Icon>
						<Icon name='fa-react'> </Icon>
						<Icon name='fa-angular'> </Icon>
						<Icon name='fas fa-database'> </Icon>
						<Icon name='fa-html5'> </Icon>
						<Icon name='fa-java'> </Icon>
						<Icon name='fa-css3-alt'> </Icon>
						<Icon name='fa-aws'> </Icon>
						<Icon name='fas fa-code-branch'> </Icon>
						<Icon name='fab fa-gitlab'> </Icon>
						<Icon name='fab fa-github'> </Icon>
					</div>
				</section>
			</section>
		)
	}
	render() {
		return (
			<section className='hero is-light'>
				<div>{this.listOfIcons()}</div>
			</section>
		)
	}
}
export default IconList
