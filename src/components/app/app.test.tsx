import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { store } from '../../store/store';
import '@testing-library/jest-dom';

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

test('should ', () => {
  const main = screen.getByRole('main');

  expect(main).toBeInTheDocument();
});
