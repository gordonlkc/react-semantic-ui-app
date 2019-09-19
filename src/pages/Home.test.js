// Link.react.test.js
import React from 'react';
import Homepage from './Home.js';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    ReactDOM.unmountComponentAtNode(div);
});