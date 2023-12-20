import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import ErrorPage from './error.page';

describe('Given Header component', () => {
  render(
    <Router>
      <Provider store={store}>
        <ErrorPage></ErrorPage>
      </Provider>
    </Router>
  );
  describe('when we render it without title', () => {
    test('Then it should render an image', async () => {
      const alienImage = screen.getAllByRole('img')[1];
      expect(alienImage).toBeInTheDocument();
    });
  });
});
