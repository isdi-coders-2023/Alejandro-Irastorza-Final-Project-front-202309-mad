import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { HeaderAdmin } from './header.admin';
import { User } from '../../entities/user';
import userEvent from '@testing-library/user-event';
import { useUsers } from '../../hooks/use.users';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogout: jest.fn(),
  }),
}));

describe('Given HeaderAdmin component', () => {
  const testHandleForm = jest.fn();
  beforeEach(() => {
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
  });
  describe('when we render it without title', () => {
    test('Then it should be one image in the document', async () => {
      const alienImage = screen.getAllByRole('img')[0];
      expect(alienImage).toBeInTheDocument();
    });
  });

  describe('when we click on logout text', () => {
    test('then logout function should be called', async () => {
      const logoutElement = screen.getByText('Cerrar sesión');
      await userEvent.click(logoutElement);
      expect(useUsers().doLogout).toHaveBeenCalled();
    });
  });
});
