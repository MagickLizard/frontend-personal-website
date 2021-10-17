import React from 'react';
import './experience.scss';
import Experience from './Experience'
import Deloitte from './Deloitte/Deloitte'
import DeloitteFed from './Deloitte/DeloitteFed'
import Venuemob from './Venuemob/Venuemob'
import Myob from './Myob/Myob'

class ExperienceList extends React.Component {
  render() {
    return (
			<div>
				<section className='hero is-danger is-bold is-large'>
					<div>
						<Experience />
					</div>
				</section>
				<section className='hero is-success'>
					<div className='container'>
						<DeloitteFed />
					</div>
				</section>
				<section className='hero is-info'>
					<div className='container'>
						<Venuemob />
					</div>
				</section>
				<section className='hero is-warning'>
					<div className='container'>
						<Myob />
					</div>
				</section>
				<section className='hero is-success'>
					<div className='container'>
						<Deloitte />
					</div>
				</section>
			</div>
		)
  }
}
export default ExperienceList;
