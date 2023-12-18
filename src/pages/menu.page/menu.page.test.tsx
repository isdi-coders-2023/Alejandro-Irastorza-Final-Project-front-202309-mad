import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MenuPage } from './menu.page';
import { useProducts } from '../../hooks/use.products';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    loadAllProducts: jest.fn(),
    closeProductPopUp: jest.fn(),
  }),
}));

describe('Given Menu Page component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <MenuPage></MenuPage>
        </Provider>
      </Router>
    );
  });
  describe('when we render it without title', () => {
    test('Then it should render an image', async () => {
      const headerTitle = screen.getAllByRole('heading')[1];
      const componentTitle = screen.getAllByRole('heading')[2];
      expect(headerTitle).toBeInTheDocument();
      expect(componentTitle).toBeInTheDocument();
    });
  });
  describe('when we close PopUp', () => {
    test('then closePopUp function should be called', async () => {
      const closeElement = screen.getByText('X');

      await userEvent.click(closeElement);

      expect(useProducts().closeProductPopUp).toHaveBeenCalled();
    });
  });
});
