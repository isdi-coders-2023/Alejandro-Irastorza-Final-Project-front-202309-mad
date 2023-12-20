import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import { Register } from './register';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doRegister: jest.fn(),
  }),
}));

describe('Given Register component', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <Provider store={store}>
          <Register></Register>
        </Provider>
      </Router>
    );
    test('Then it submits form with correct values', async () => {
      const fromElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');
      const submitButton = screen.getByRole('button', { name: 'Registrarme' });
      const showButton = screen.getByRole('button', { name: 'See' });
      await userEvent.type(inputElements[0], 'test');
      await userEvent.type(inputElements[1], 'test');
      await userEvent.click(submitButton);
      await userEvent.click(showButton);
      await fireEvent.submit(fromElement);
      expect(useUsers().doRegister).toHaveBeenCalled();
    });
  });
});
