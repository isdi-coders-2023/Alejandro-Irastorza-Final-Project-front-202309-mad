import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { AdminCard } from './admin.card';
import { Product } from '../../entities/product';
import configureStore from 'redux-mock-store';
import { User } from '../../entities/user';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    deleteProduct: jest.fn(),
  }),
}));

const mockedStore = configureStore();

const initialState = {
  users: {
    loggedUser: { name: '', profilePic: { url: '' } } as User,
    loginState: 'logged',
    userToken: '',
  },
  products: {
    products: {
      products: [
        { creator: { name: '' } },
        { creator: { name: '' } },
      ] as Product[],
    },
  },
};

const store = mockedStore(initialState);

describe('Given AdminCard component', () => {
  describe('when we render it and products is visible', () => {
    test('Then it should show a card', async () => {
      render(
        <Router>
          <Provider store={store}>
            <AdminCard
              product={
                {
                  name: 'Product name test',
                  modelImg: { url: '' },
                  creator: { name: '' },
                } as Product
              }
            ></AdminCard>
          </Provider>
        </Router>
      );
      const cardElement = screen.getByRole('heading');
      const deleteButton = screen.getByText('Eliminar');
      await fireEvent.click(deleteButton);
      expect(cardElement).toBeInTheDocument();
    });
  });

  describe('When we render it and products isnt visible', () => {
    test('then it should show a tag', () => {
      render(
        <Router>
          <Provider store={store}>
            <AdminCard
              product={
                {
                  name: 'Product name test',
                  modelImg: { url: '' },
                  creator: { name: '' },
                  noStock: true,
                } as Product
              }
            ></AdminCard>
          </Provider>
        </Router>
      );
      const cardTagElement = screen.getByText('Oculto');
      expect(cardTagElement).toBeInTheDocument();
    });
  });
});
