import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { HeaderAdmin } from './header.admin';

describe('Given HeaderAdmin component', () => {
  describe('when we render it without title', () => {
    test('Then it should be image in the document', async () => {
      render(
        <Router>
          <Provider store={store}>
            <HeaderAdmin title="Test Title"></HeaderAdmin>
          </Provider>
        </Router>
      );
      const alienImage = screen.getAllByRole('img')[0];
      expect(alienImage).toBeInTheDocument();
    });
  });
});
