import { ProductsState } from './products.slice';
import { productsSlice } from '../../slices/products/products.slice';

const { actions, reducer } = productsSlice;

describe('Given productsSlice', () => {
  describe('When we call reducer with setOffPopUp action', () => {
    test('then it should set popUpState to false ', () => {
      const currentState = {
        currentProduct: null,
        products: null,
        productState: 'idle',
        productUpdateState: 'idle',
        productsOneloadState: 'idle',
        productFilter: 'Todos los productos',
        popUpState: true,
      } as ProductsState;

      const newState = reducer(currentState, actions.setOffPopUp());

      expect(newState.popUpState).toBe(false);
    });
  });

  describe('When we call reducer with setOnPopUp action', () => {
    test('then it should set popUpState to true ', () => {
      const currentState = {
        currentProduct: null,
        products: null,
        productState: 'idle',
        productUpdateState: 'idle',
        productsOneloadState: 'idle',
        productFilter: 'Todos los productos',
        popUpState: false,
      } as ProductsState;

      const newState = reducer(currentState, actions.setOnPopUp());

      expect(newState.popUpState).toBe(true);
    });
  });
});
