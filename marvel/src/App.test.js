import React from 'react';
import ReactDOM from 'react-dom';
import SearchCharacter from './components/search.js';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const input = document.createElement('input');
  ReactDOM.render(<SearchCharacter />, input);
});
