import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};
  onInputChange = event => {
    this.setState({term: event.target.value});
  }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchTerm(this.state.term);
  }
  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title"> Work in progress.. </h1>
          <h2 className="subtitle"> Come back soon.. </h2>
        </div>
      </div>
    )
  }

}
export default SearchBar;