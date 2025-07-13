import React, { Component } from 'react';

class Search extends Component {
  state = { search: '' };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <>
        <div class='row'>
          <div class='col s12'>
            <div class='input-field'>
              <input
                placeholder='search'
                type='search'
                className='validate'
                onChange={(event) => {
                  this.setState({ search: event.target.value }),
                    console.log(this.state.search);
                }}
                onKeyDown={this.handleKey}
              />
              <button
                onClick={() =>
                  this.props.searchMovies(this.state.search, this.state.type)
                }
                className='btn search-btn'
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
