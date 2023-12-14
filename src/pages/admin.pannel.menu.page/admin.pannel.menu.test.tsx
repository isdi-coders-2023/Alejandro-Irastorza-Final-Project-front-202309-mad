import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { AdminPannelMenu } from './admin.pannel.menu.page';

describe('Given Header component', () => {
  render(
    <Router>
      <Provider store={store}>
        <AdminPannelMenu></AdminPannelMenu>
      </Provider>
    </Router>
  );
  describe('when we render it', () => {
    test('Then it should display a list', async () => {
      const menuList = screen.getByRole('list');
      expect(menuList).toBeInTheDocument();
    });
  });
});
