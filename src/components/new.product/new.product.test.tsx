import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { ProductForm } from './new.product';
import userEvent from '@testing-library/user-event';
import { SyntheticEvent } from 'react';
import { Product } from '../../entities/product';

describe('Given the ProductForm component', () => {
  const mockedHandleSubmit = (event: SyntheticEvent) => {
    console.log(event);
  };
  render(
    <Router>
      <Provider store={store}>
        <ProductForm
          productToEdit={{} as Product}
          handleSubmit={mockedHandleSubmit}
        ></ProductForm>
      </Provider>
    </Router>
  );

  const fromElement = screen.getByRole('form');
  const newCheckBox = screen.getAllByRole('checkbox')[0];
  const noStockCheckbox = screen.getAllByRole('checkbox')[1];
  const topOrderCheckbox = screen.getAllByRole('checkbox')[2];
  const submitButton = screen.getByText('Agregar');
  const nameInputElement = screen.getAllByRole('textbox')[0];

  describe('when we submit it with checkbox clicked', () => {
    test('Then it submits form with correct values', async () => {
      await userEvent.click(newCheckBox);
      await userEvent.click(noStockCheckbox);
      await userEvent.click(topOrderCheckbox);
      await userEvent.type(nameInputElement, 'sample');

      expect(fromElement).toBeInTheDocument();

      await userEvent.click(newCheckBox);
      await userEvent.click(noStockCheckbox);
      await userEvent.click(topOrderCheckbox);
      await userEvent.click(submitButton);

      expect(fromElement).toBeInTheDocument();
    });
  });
});
