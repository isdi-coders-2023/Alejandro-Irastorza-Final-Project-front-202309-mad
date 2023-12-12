import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MenuCard } from './menu.card';

describe('Given MenuCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <MenuCard></MenuCard>
      </Provider>
    </Router>
  );

  test('Then it should render', async () => {
    const priceElement = screen.getByText('Precio');
    expect(priceElement).toBeInTheDocument();
  });
});
