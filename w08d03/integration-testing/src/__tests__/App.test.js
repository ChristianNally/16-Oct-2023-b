import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import {render, prettyDOM, fireEvent} from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

test('can toggle the isCheating boolean by clicking on the robot head icon', () => {
  const {getByTestId, container, debug} = render(<App />);
  // console.log(prettyDOM(container));
  // debug();

  const robotHeadIcon = getByTestId('robot-head');

  fireEvent.click(robotHeadIcon);

  expect(robotHeadIcon).toHaveClass('cheating');

  fireEvent.click(robotHeadIcon);

  expect(robotHeadIcon).not.toHaveClass('cheating');
});
