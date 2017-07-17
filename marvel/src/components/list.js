import React, { Component } from 'react';
var helpers = require('../utils/helpers');

export default class ListCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: this.props.searchResults,
      keySearch: this.props.keySearch
    };
  }

  componentDidMount() {
    helpers.getMarvelInfo(this.props.keySearch)
      .then(function(data) {
        this.setState({
          searchResults: data.characters
        });
      }.bind(this));

  }

  componentDidUpdate() {
    if (this.props.keySearch !== this.state.keySearch) {
      helpers.getMarvelInfo(this.props.keySearch)
        .then(function(data) {
          this.setState({
            searchResults: data.characters,
            keySearch: this.props.keySearch,
          });
        }.bind(this));
    }
  }

  render() {
    return (
      <div>
        <h1>Characters!</h1>
          <div className="marvel-list">
          {this.state.searchResults.map(function(character) {
            return (
              <div key={character.id} className="character">
                <img className="marvel-character" alt={character.name} src={character.thumbnail.path +'.'+ character.thumbnail.extension} />
                <span className="marvel-resource">
                  <a href={character.resourceURI}>{character.name}</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} 
