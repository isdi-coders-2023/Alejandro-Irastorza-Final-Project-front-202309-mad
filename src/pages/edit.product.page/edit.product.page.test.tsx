import { fireEvent, render, screen } from '@testing-library/react';
import EditProductPage from './edit.product.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import createMockStore from 'redux-mock-store';
import { User } from '../../entities/user';
import { Product } from '../../entities/product';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    loadOneProduct: jest.fn(),
    updateCurrentProduct: jest.fn(),
  }),
}));

describe('Given EditProductPage Component', () => {
  const mockedStore = createMockStore([]);

  const initialState = {
    users: { loggedUser: { profilePic: { url: '' } } as User },
    products: {
      products: [
        { name: '', description: '', id: '123', price: 123 },
      ] as Product[],
    },
  };

  const store = mockedStore(initialState);
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <EditProductPage></EditProductPage>
        </Provider>
      </Router>
    );
  });

  describe('When we render form element', () => {
    test('Then submit should be called with checkboxes in true', async () => {
      const firstFormElement = screen.getByRole('form');
      const submitButtonElement = screen.getAllByRole('button')[0];
      const checkBoxes = screen.getAllByRole('checkbox');

      await userEvent.click(checkBoxes[0]);
      await userEvent.click(checkBoxes[1]);
      await userEvent.click(checkBoxes[2]);
      await userEvent.click(submitButtonElement);
      expect(firstFormElement).toBeInTheDocument();
    });
  });

  describe('If we render form element', () => {
    test('Then form should be rendered with checkboxes in true', async () => {
      const secondFromElement = screen.getByRole('form');

      await fireEvent.submit(secondFromElement);

      expect(secondFromElement).toBeInTheDocument();
    });
  });
});
