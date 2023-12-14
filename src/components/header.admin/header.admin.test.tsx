import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { HeaderAdmin } from './header.admin';
import { User } from '../../entities/user';

describe('Given HeaderAdmin component', () => {
  describe('when we render it without title', () => {
    const testHandleForm = jest.fn();
    test('Then it should be image in the document', async () => {
      render(
        <Router>
          <Provider store={store}>
            <HeaderAdmin
              user={{ profilePic: { url: '' } } as User}
              handleSelectFn={testHandleForm}
              title="Test Title"
            ></HeaderAdmin>
          </Provider>
        </Router>
      );
      const alienImage = screen.getAllByRole('img')[0];
      expect(alienImage).toBeInTheDocument();
    });
  });
});
