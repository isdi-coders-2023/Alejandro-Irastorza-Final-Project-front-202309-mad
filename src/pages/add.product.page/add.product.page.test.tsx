import { render, screen } from '@testing-library/react';
import { AddProductPage } from './add.product.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    addNewProduct: jest.fn(),
  }),
}));

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
    });

    test('Then submit should be called with checkboxes in false', async () => {
      const secondFromElement = screen.getByRole('form');
      const secondSubmitButtonElement = screen.getAllByRole('button')[0];

      await userEvent.click(secondSubmitButtonElement);

      expect(secondFromElement).toBeInTheDocument();
    });
  });
});
