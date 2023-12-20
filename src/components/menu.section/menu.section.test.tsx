import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MenuSection } from './menu.section';
import { store } from '../../store/store';
import { Product } from '../../entities/product';

describe('Given MenuCard component', () => {
  describe('when we add a product array with stock diffetence', () => {
    test('Then it should render', async () => {
      render(
        <Router>
          <Provider store={store}>
            <MenuSection
              category="Test"
              products={[
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: true,
                  topOrder: true,
                } as Product,
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: true,
                  topOrder: false,
                } as Product,
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: false,
                  topOrder: true,
                } as Product,
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: true,
                  topOrder: false,
                } as Product,
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: false,
                  topOrder: false,
                } as Product,
                {
                  category: 'Test',
                  noStock: false,
                  id: '123',
                  modelImg: { url: 'url.test.com' },
                  new: false,
                  topOrder: false,
                } as Product,
              ]}
            ></MenuSection>
          </Provider>
        </Router>
      );

      const componentTitle = screen.getAllByRole('heading')[0];
      expect(componentTitle).toBeInTheDocument();
    });
  });

  describe('when we do not add a category same as object in params', () => {
    test('Then it should render', async () => {
      render(
        <Router>
          <Provider store={store}>
            <MenuSection category="Other" products={null}></MenuSection>
          </Provider>
        </Router>
      );

      const feedbackMessage = screen.getByRole('listitem');
      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
