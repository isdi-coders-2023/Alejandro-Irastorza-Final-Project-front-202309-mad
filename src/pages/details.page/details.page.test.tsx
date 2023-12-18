import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { DetailsPage } from './details.page';

describe('Given Header component', () => {
  render(
    <Router>
      <Provider store={store}>
        <DetailsPage></DetailsPage>
      </Provider>
    </Router>
  );
  describe('when we render it', () => {
    test('Then it should display a list', async () => {
      const headerImg = screen.getAllByRole('img')[0];

      expect(headerImg).toBeInTheDocument();
    });
  });
});
