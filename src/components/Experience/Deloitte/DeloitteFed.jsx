import React from 'react'
import '../experience.scss'
import ExperienceImage from '../ExperienceImage/ExperienceImage'
import DeloitteImage from '../../../img/deloitte.png'

class DeloitteFed extends React.Component {
	render() {
		return (
			<section className='section'>
				<section className='section columns is-horizontal-center'>
					<div className='image employers'>
						<ExperienceImage
							imageRef={DeloitteImage}
							imageName={DeloitteImage}
						/>
					</div>
				</section>
				<div className='container columns'>
					<div className='column is-2' />
					<div className='column is-4 experience-info'>
						<h3 className='title is-6 experience-info'>Contributions</h3>
						As part of my role I do the following: Follow agile & SCRUM
						methodologies of retrospective, iterative action taking, planning &
						grooming. Pair programming, mentoring & code reviews.
						<br />
						Support & guide developers from a technical perspective.
						<br />
						<br />
						Test cases using Jest.
						<br />
						<br />
						Using CSS pre-processors & JS libraries such as: Styled-components,
						SCSS, Ecmascript, React, Gatsby
						<br />
						<p className='content' />
					</div>
					<div className='column is-4'>
						<h3 className='title is-6 experience-info'>Client work</h3>
						<p className='content experience-info'>
							Focused on redesigning & recreating a marketing website including
							recipes, filtering and creating components to be used across
							multiple client businesses.
							<br />
							<br />
							• Integrated & extending upon style guides & code bases (CSS,
							HTML, React). • Built out new responsive components in React, &
							SCSS including: Horizontal and side panel filters (checkboxes &
							responsive variations), Result Cards, accordions, Checkbox lists,
							modal, calculator.
							<br />
							<br />• Built out new responsive components in HTML5, SCSS &
							Jquery including: Hero Banners, Header, Side menu, Ingredients
							list • Extended upon existing Jquery components including: • Side
							navigation menu used on mobile • Search form submission
						</p>
					</div>
				</div>
			</section>
		)
	}
}
export default DeloitteFed
