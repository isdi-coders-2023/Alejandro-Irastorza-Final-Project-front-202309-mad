import { render, screen } from '@testing-library/react';
import { EditProductPage } from './edit.product.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';

describe('Given EditProductPage Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <EditProductPage></EditProductPage>
        </Provider>
      </Router>
    );
  });

  describe('If we render form element', () => {
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
      const secondSubmitButtonElement = screen.getAllByRole('button')[0];

      await userEvent.click(secondSubmitButtonElement);

      expect(secondFromElement).toBeInTheDocument();
    });
  });
});
