import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Details } from './details';

describe('Given AdminCard component', () => {
  render(
    <Router>
      <Provider store={store}>
        <Details></Details>
      </Provider>
    </Router>
  );
  test('Then it should render', async () => {
    const goBackButton = screen.getByText('Regresar');
    await fireEvent.click(goBackButton);
    expect(goBackButton).toBeInTheDocument();
  });
});
