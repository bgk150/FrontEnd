import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import'@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import TodoTable from './components/TodoTable';

test('renders todotable', () =>  {
  const row = [{description: 'Go to coffee', date:'24.11.2019'}
  ]
  const todotable = render(<TodoTable todos={row} /> );
  expect(todotable.container).toHaveTextContent('Go to coffee');
})

test('add todo',() => {
  const { container, getByText, getByPlaceholderText } = render(<App />);
  
  const description = getByPlaceholderText('Description');
  fireEvent.change(description, { target: { value:'Go to coffee'} })
  
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value:'29/11/2019'} })
  
  const button = getByText('Add');
  fireEvent.click(button);
  
  expect(container).toHaveTextContent('Go to coffee');

})