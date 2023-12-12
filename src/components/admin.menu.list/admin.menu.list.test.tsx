import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { AdminMenu } from './admin.menu.list';
import { store } from '../../store/store';
import { Product } from '../../entities/product';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    loadAllProducts: jest.fn(),
  }),
}));

describe('Given AdminCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <AdminMenu filter="Test" products={[] as Product[]}></AdminMenu>
      </Provider>
    </Router>
  );
  test('Then it should render', async () => {
    const buttonElement = screen.getByText('Agregar producto');
    expect(buttonElement).toBeInTheDocument();
  });
});
