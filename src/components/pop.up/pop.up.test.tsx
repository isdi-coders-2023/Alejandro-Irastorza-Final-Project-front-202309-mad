import { Provider } from 'react-redux';
import { PopUp } from './pop.up';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';

const mockedStore = configureStore();

describe('Given Popup component', () => {
  describe('when we render the component with popUpState in true', () => {
    test('then it should be an image with an x text as button', async () => {
      const initialState = {
        products: {
          popUpState: true,
        },
      };

      const store = mockedStore(initialState);
      render(
        <Router>
          <Provider store={store}>
            <PopUp
              imgUrl=""
              handleDisplay={jest.fn()}
              imgDescription=""
            ></PopUp>
          </Provider>
        </Router>
      );
      const imageElement = screen.getByRole('img');
      const xButtonElement = screen.getByText('X');

      userEvent.click(xButtonElement);

      expect(imageElement).toBeInTheDocument();
    });
  });

  describe('when we render the component with popUpState in false', () => {
    test('then it should be a fiv with class fade-out', () => {
      const initialState = {
        products: {
          popUpState: false,
        },
      };

      const store = mockedStore(initialState);
      render(
        <Router>
          <Provider store={store}>
            <PopUp
              imgUrl=""
              handleDisplay={jest.fn()}
              imgDescription=""
            ></PopUp>
          </Provider>
        </Router>
      );
      const imgElement = screen.getByRole('img');

      expect(imgElement).toBeInTheDocument();
    });
  });
});
