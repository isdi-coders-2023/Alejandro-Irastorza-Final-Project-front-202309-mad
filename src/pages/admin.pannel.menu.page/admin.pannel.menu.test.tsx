import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { AdminPannelMenu } from './admin.pannel.menu.page';
import userEvent from '@testing-library/user-event';
import { useProducts } from '../../hooks/use.products';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    getByCategory: jest.fn(),
    loadAllProducts: jest.fn(),
  }),
}));

describe('Given Header component', () => {
  describe('when we render it', () => {
    beforeEach(() => {
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
});
