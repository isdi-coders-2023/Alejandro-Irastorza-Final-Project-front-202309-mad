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

describe('Given app component', () => {
  describe('when we render it', () => {
    test('then it should be a main tag in the document', () => {
      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });
  });
});
