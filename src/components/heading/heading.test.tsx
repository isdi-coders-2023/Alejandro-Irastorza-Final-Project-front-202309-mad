import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Heading } from './heading';
import { render, screen } from '@testing-library/react';
import { store } from '../../store/store';
import '@testing-library/jest-dom';

describe('Given heading component', () => {
  describe('when we render it', () => {
    test('then it should be an image in the document', () => {
      render(
        <Router>
          <Provider store={store}>
            <Heading imagePath="" imgDescription=""></Heading>
          </Provider>
        </Router>
      );

      const imageElement = screen.getByRole('img');

      expect(imageElement).toBeInTheDocument();
    });
  });
});
