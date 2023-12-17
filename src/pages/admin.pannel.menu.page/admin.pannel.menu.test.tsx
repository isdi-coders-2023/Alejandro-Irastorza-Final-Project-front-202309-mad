import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { AdminPannelMenu } from './admin.pannel.menu.page';
import userEvent from '@testing-library/user-event';
import { useProducts } from '../../hooks/use.products';
import configureStore from 'redux-mock-store';
import { User } from '../../entities/user';
// import 'react-router-dom';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    getByCategory: jest.fn(),
    loadAllProducts: jest.fn(),
  }),
}));

// jest.mock('react-router-dom', () => {
//   useNavigate: jest.fn();
// });

const mockStore = configureStore([]);

describe('Given Header component', () => {
  let store;
  describe('when we render it', () => {
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

  // describe('When we render it whit logout users state', () => {
  //   test('Then it should', () => {
  //     const initialState = {
  //       users: {
  //         loggedUser: null,
  //         loginState: 'logout',
  //         userToken: '',
  //       },
  //       products: {
  //         currentProduct: null,
  //         products: null,
  //         productState: 'idle',
  //         productUpdateState: 'idle',
  //         productsOneloadState: 'idle',
  //         productFilter: 'Todos los productos',
  //         popUpState: true,
  //       },
  //     };

  //     store = mockStore(initialState);

  //     render(
  //       <Router>
  //         <Provider store={store}>
  //           <AdminPannelMenu></AdminPannelMenu>
  //         </Provider>
  //       </Router>
  //     );

  //     const navigate = jest.fn()

  //     expect;
  //   });
  // });
});
