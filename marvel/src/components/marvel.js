import React, { Component } from 'react';
import SearchCharacter from './search.js';
import ListCharacters from './list.js';

export default class Marvel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: []
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

    
  onInputChange(value) {
    this.setState ({searchText: value });
  }

  render() {
    return (
      <div className="marvel-search">
        <div className="top-header">
          <p>Insert any word to try find a character from marvel:</p>
          <SearchCharacter callbackParent={(newValue) => this.onInputChange(newValue) } />
        </div>
        <div className="main-content">
          <ListCharacters keySearch={this.state.searchText} searchResults={this.state.searchResults} />
        </div>
      </div>
    );
  }
} 
