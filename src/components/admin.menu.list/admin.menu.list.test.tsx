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
  describe('when we render it with an object', () => {
    test('then it should be a button in the document', async () => {
      render(
        <Router>
          <Provider store={store}>
            <AdminMenu
              filter="Test"
              products={[
                {
                  id: '123',
                  name: 'Sample',
                  modelImg: { url: 'Sample url' },
                  creator: { name: '' },
                } as Product,
              ]}
            ></AdminMenu>
          </Provider>
        </Router>
      );
      const buttonElement = screen.getByText('Agregar producto');
      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe('when we render it without an object', () => {
    test('then it should be a text in the document', async () => {
      render(
        <Router>
          <Provider store={store}>
            <AdminMenu filter="Test" products={null}></AdminMenu>
          </Provider>
        </Router>
      );
      const feedbackMessage = screen.getAllByRole('listitem')[0];
      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
