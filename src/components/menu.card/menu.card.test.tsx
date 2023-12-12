import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MenuCard } from './menu.card';

describe('Given MenuCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <MenuCard></MenuCard>
      </Provider>
    </Router>
  );
  describe('When we render it with empty state', () => {
    test('Then it should render a error text', async () => {
      const errorDivElement = screen.getByText('Error loading your product.');
      expect(errorDivElement).toBeInTheDocument();
    });
  });
});
