import React, { Component } from 'react';

export default class SearchCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = { init: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ init: event.target.value });
    this.props.callbackParent(event.target.value);
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          className="form-control"
          placeholder = "Insert a key to find"
          onChange={this.onInputChange}
          value={this.state.init} />
      </form>
    );
  }
} 
