import { fireEvent, render, screen } from '@testing-library/react';
import AddProductPage from './add.product.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { User } from '../../entities/user';
import { useProducts } from '../../hooks/use.products';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    addNewProduct: jest.fn(),
  }),
}));

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogout: jest.fn(),
  }),
}));

const mockedStore = configureStore([]);

const initialState = {
  users: {
    loggedUser: { profilePic: { url: '', publicId: '' } } as User,
    loginState: 'logout',
    userToken: '',
  },
  products: {},
};

const store = mockedStore(initialState);

describe('Given Add Product page', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <AddProductPage></AddProductPage>
        </Provider>
      </Router>
    );
  });

  describe('when page is rendered and user fill inputs', () => {
    test('Then submit should be called with checkboxes in true', async () => {
      const formElement = screen.getByRole('form');
      const submitButton = screen.getAllByRole('button')[0];
      const checkboxes = screen.getAllByRole('checkbox');

      await userEvent.click(checkboxes[0]);
      await userEvent.click(checkboxes[1]);
      await userEvent.click(checkboxes[2]);
      await userEvent.click(submitButton);

      expect(formElement).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(useProducts().addNewProduct).toHaveBeenCalled();
    });
  });

  describe('when page is rendered and user does not click checkboxes', () => {
    test('Then submit should be called with checkboxes in false', async () => {
      const secondFrom = screen.getByRole('form');

      await fireEvent.submit(secondFrom);

      expect(secondFrom).toBeInTheDocument();
      expect(useProducts().addNewProduct).toHaveBeenCalled();
    });
  });
});
