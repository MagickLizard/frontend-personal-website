import React from 'react';

class Youtube extends React.Component {
  state = { videos: [] };
  onSearchTermSubmit = async (term) => {
    const response = await ApiYoutube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
}
export default Youtube; 