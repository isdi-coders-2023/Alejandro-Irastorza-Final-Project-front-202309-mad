import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MenuCard } from './menu.card';
import { Product } from '../../entities/product';

describe('Given MenuCard component', () => {
  describe('When we render it with empty state', () => {
    test('Then it should render a error text', async () => {
      render(
        <Router>
          <Provider store={store}>
            <MenuCard></MenuCard>
          </Provider>
        </Router>
      );

      const errorDivElement = screen.getByText('Error loading your product.');
      expect(errorDivElement).toBeInTheDocument();
    });
  });

  describe('When we render it with a product', () => {
    test('Then it should render a error text', async () => {
      render(
        <Router>
          <Provider store={store}>
            <MenuCard
              product={
                {
                  modelImg: { url: 'http://www.www.www' },
                  new: true,
                  noStock: true,
                  topOrder: true,
                } as Product
              }
            ></MenuCard>
          </Provider>
        </Router>
      );

      const productImage = screen.getByRole('img');
      expect(productImage).toBeInTheDocument();
    });
  });
});
