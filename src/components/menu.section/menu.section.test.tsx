import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MenuSection } from './menu.section';
import { store } from '../../store/store';
import { Product } from '../../entities/product';

describe('Given MenuCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <MenuSection
          category="Test"
          headingDescription="Test"
          products={[] as Product[]}
        ></MenuSection>
      </Provider>
    </Router>
  );

  test('Then it should render', async () => {
    const componentTitle = screen.getAllByRole('heading')[0];
    expect(componentTitle).toBeInTheDocument();
  });
});
