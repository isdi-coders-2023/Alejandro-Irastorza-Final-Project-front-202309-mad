import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Header } from './header';

describe('Given Header component', () => {
  render(
    <Router>
      <Provider store={store}>
        <Header title="Test"></Header>
      </Provider>
    </Router>
  );
  describe('when we render it without title', () => {
    test('Then it should render an image', async () => {
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});
