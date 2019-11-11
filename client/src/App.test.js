import React from 'react';
import App from './App';
import Main from './components/Main';
import PlayersList from './components/PlayersList'
import { render, getByLabelText } from '@testing-library/react';
import Axios from 'axios';




test('renders without crashing', () => {
  render(<App />);
});

test('contains title 1', () => {

  const container = render(<App />)
  const learn = container.getByText("Womens World Cup");
})

test('contains title 2', () => {

  const container = render(<App />)
  const learn = container.getByText("Players List");
})





