import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import createMockStore from 'redux-mock-store';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogin: jest.fn(),
  }),
}));

describe('Given Login component', () => {
  describe('When is filled succesfully', () => {
    test('Then it submits form with correct values', async () => {
      render(
        <Router>
          <Provider store={store}>
            <Login></Login>
          </Provider>
        </Router>
      );
      const fromElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');
      const submitButton = screen.getByRole('button', {
        name: 'Iniciar sesión',
      });
      const showPasswordButton = screen.getByRole('button', { name: 'Hide' });

      await userEvent.type(inputElements[0], 'test');
      await userEvent.type(inputElements[1], 'test');
      await userEvent.click(submitButton);
      await userEvent.click(showPasswordButton);

      await fireEvent.submit(fromElement);
      expect(useUsers().doLogin).toHaveBeenCalled();
      expect(fromElement).toBeInTheDocument();
    });
  });
});

describe('When submit is rejected', () => {
  const mockedStore = createMockStore([]);

  const initialMockedState = {
    users: { loginState: 'rejected' },
  };

  const rejectedStoreMock = mockedStore(initialMockedState);

  test('Then it should throw a sweet alert', async () => {
    render(
      <Router>
        <Provider store={rejectedStoreMock}>
          <Login></Login>
        </Provider>
      </Router>
    );
    const sweetEvent = screen.getByRole('dialog');

    expect(sweetEvent).toBeInTheDocument();
  });
});
