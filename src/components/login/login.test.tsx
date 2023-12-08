import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './login';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useUsers } from '../../hooks/use.users';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogin: jest.fn(),
  }),
}));

describe('Login Component', () => {
  render(
    <Router>
      <Provider store={store}>
        <Login></Login>
      </Provider>
    </Router>
  );
  test('Then it submits form with correct values', async () => {
    const fromElement = screen.getByRole('form');
    const inputElements = screen.getAllByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Iniciar sesión' });
    await userEvent.type(inputElements[0], 'test');
    await userEvent.type(inputElements[1], 'test');
    await userEvent.click(submitButton);
    await fireEvent.submit(fromElement);
    expect(useUsers().doLogin).toHaveBeenCalled();
    expect(fromElement).toBeInTheDocument();
  });
});
