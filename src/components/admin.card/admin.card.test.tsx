import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { AdminCard } from './admin.card';
import { Product } from '../../entities/product';

jest.mock('../../hooks/use.products', () => ({
  useProducts: jest.fn().mockReturnValue({
    deleteProduct: jest.fn(),
  }),
}));

describe('Given AdminCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <AdminCard
          product={
            { name: 'Product name test', modelImg: { url: '' } } as Product
          }
        ></AdminCard>
      </Provider>
    </Router>
  );
  test('Then it should render', async () => {
    const cardElement = screen.getByRole('heading');
    const deleteButton = screen.getByText('Eliminar');
    await fireEvent.click(deleteButton);
    expect(cardElement).toBeInTheDocument();
  });
});
