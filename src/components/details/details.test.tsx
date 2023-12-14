import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Product } from '../../entities/product';
import { Details } from './details';
import { store } from '../../store/store';

describe('Given AdminCard component', () => {
  describe('when the component recieve an array', () => {
    test('Then it should render', async () => {
      render(
        <Router>
          <Provider store={store}>
            <Details
              id="123"
              products={[
                {
                  id: '123',
                  new: true,
                  noStock: true,
                  topOrder: true,
                  name: 'sample',
                  modelImg: { url: '123' },
                } as Product,
              ]}
            ></Details>
          </Provider>
        </Router>
      );

      const imgElement = screen.getByRole('img');
      expect(imgElement).toBeInTheDocument();
    });
  });

  describe('when the component dont recieve an array', () => {
    test('then it should display a message', () => {
      render(
        <Router>
          <Provider store={store}>
            <Details id="123" products={null}></Details>
          </Provider>
        </Router>
      );

      const messageElement = screen.getByText(
        'There was an error loading the product.'
      );

      expect(messageElement).toBeInTheDocument();
    });
  });
});
