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
          <h3 className='title is-6 experience-info'>Front end Developer</h3>
						<h3 className='title is-6 experience-info'>Contributions</h3>
						As part of my role I do the following: 
            <li>Use agile methodologies (SCRUM, Kanban) of retrospective, iterative action taking, planning &
						grooming.
            </li>
            <li>
            Pair programming, mentoring & code reviews.
            </li>
						 <li>
             Support & guide developers from a technical perspective.
             </li>
             <li>
             Test cases using Jest and mocha.
             </li>
						<br />
						Using CSS pre-processors & JS libraries such as: Styled-components,
						SCSS, Ecmascript, React, Gatsby
						<br />
						<br />
					</div>
					<div className='column is-4'>
						<h3 className='title is-6 experience-info'>Client work</h3>
						<p className='content experience-info'>
							Focused on redesigning & recreating a marketing website including
							how to guides, filtering and creating reusable components to be used across
							multiple client businesses.
							<br />
							Integrated & extending upon client style guides & code bases (SCSS, HTML, React). 
              <br />
              Built out new responsive components in React, & SCSS including: 
              <li> Horizontal and side panel filters (checkboxes &
							responsive variations) </li>
              <li> Result Cards, preview cards, accordion, Checkbox lists, item lists, modal and GST calculator.</li>
							<br />
              Built out new responsive components in HTML5, SCSS &
							Jquery including: Hero Banners, Header, Side menu and content list
              <br />
               Extended upon existing Jquery components including:
              <li>Side navigation menu used on mobile </li>
              <li>Search form submission </li>
						</p>
					</div>
				</div>
			</section>
		)
	}
}
export default DeloitteFed
