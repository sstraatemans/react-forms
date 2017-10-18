import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './';

describe('Form TextInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput />, div);
  });
});
