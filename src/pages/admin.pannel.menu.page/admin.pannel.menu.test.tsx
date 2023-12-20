import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import AdminPannelMenu from './admin.pannel.menu.page';
import userEvent from '@testing-library/user-event';
import { useProducts } from '../../hooks/use.products';
import configureStore from 'redux-mock-store';
import { User } from '../../entities/user';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    getByCategory: jest.fn(),
    loadAllProducts: jest.fn(),
  }),
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockStore = configureStore([]);

describe('Given Header component', () => {
  let store;
  describe('when we render it and loginState is logged', () => {
    beforeEach(() => {
      const initialState = {
        users: {
          loggedUser: { profilePic: { url: '' } } as User,
          loginState: 'logged',
          userToken: '',
        },
        products: {
          currentProduct: null,
          products: null,
          productState: 'idle',
          productUpdateState: 'idle',
          productsOneloadState: 'idle',
          productFilter: 'Todos los productos',
          popUpState: true,
        },
      };

      store = mockStore(initialState);
      render(
        <Router>
          <Provider store={store}>
            <AdminPannelMenu></AdminPannelMenu>
          </Provider>
        </Router>
      );
    });

    test('Then it should display a list', async () => {
      const menuList = screen.getByRole('list');

      expect(menuList).toBeInTheDocument();
    });

    test('Then it should load only Sueritos', async () => {
      const filter = screen.getByRole('combobox');

      expect(filter).toBeInTheDocument();

      const sueritosOption = screen.getByText('Sueritos');
      await userEvent.selectOptions(filter, sueritosOption);

      expect(sueritosOption).toBeInTheDocument();
      expect(useProducts().getByCategory).toHaveBeenCalled();
    });

    test('Then it should load all products ', async () => {
      const filter = screen.getByRole('combobox');

      expect(filter).toBeInTheDocument();

      const allOption = screen.getByText('Todos');
      await userEvent.selectOptions(filter, allOption);

      expect(allOption).toBeInTheDocument();
      expect(useProducts().loadAllProducts).toHaveBeenCalled();
    });
  });

  describe('when we render it and loginState isnt logged', () => {
    beforeEach(() => {
      const initialState = {
        users: {
          loggedUser: null,
          loginState: 'logout',
          userToken: null,
        },
        products: {
          products: null,
          productState: '',
          productUpdateState: '',
          productFilter: '',
        },
      };

      store = mockStore(initialState);
      render(
        <Router>
          <Provider store={store}>
            <AdminPannelMenu></AdminPannelMenu>
          </Provider>
        </Router>
      );
    });

    test('Then it should call navigate ', async () => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
