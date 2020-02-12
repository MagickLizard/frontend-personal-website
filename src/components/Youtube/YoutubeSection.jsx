import React from 'react'
import SearchBar from './SearchBar/SearchBar'

class YoutubeSection extends React.Component {
	render() {
		return (
			<div>
				<section className='hero has-background'>
					<SearchBar searchTerm={this.onSearchTermSubmit} />
				</section>
			</div>
		)
	}
}
export default YoutubeSection
