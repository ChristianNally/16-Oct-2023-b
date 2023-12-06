import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display the results from an API call', () => {
  // render the component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the fetch high scores button
  const highScoreButton = getByTestId('high-scores');

  // click on the button
  fireEvent.click(highScoreButton);

  // find one of our fake users in the DOM
  return findByText('bob', { exact: false });
});
