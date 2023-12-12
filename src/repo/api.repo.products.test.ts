import { ApiRepoProducts } from './api.repo.products.js';

describe('Given ApiRepoProducts', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({});
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    const repo = new ApiRepoProducts();

    test('Then the method createProduct should be used', async () => {
      const result = await repo.createProduct({} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method updateProduct should be used', async () => {
      const result = await repo.updateProduct('', {} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method deleteProduct should be used', async () => {
      const result = await repo.deleteProduct('');
      expect(result).toStrictEqual({});
    });

    test('Then the method getAllProducts should be used', async () => {
      const result = await repo.getAllProducts();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method getProductById should be used', async () => {
      const result = await repo.getProductById('');
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });
  });

  describe('When we instantiate it and response is not ok', () => {
    const errorStatus = 404;
    const errorStatusText = 'Not Found';

    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: errorStatus,
        statusText: errorStatusText,
      });
    });

    const repo = new ApiRepoProducts();

    test('Then the method createProduct should throw an error', async () => {
      await expect(repo.createProduct({} as FormData)).rejects.toThrow();
    });

    test('Then the method updateProduct should throw an error', async () => {
      await expect(repo.updateProduct('', {} as FormData)).rejects.toThrow();
    });

    test('Then the method deleteProduct should throw an error', async () => {
      await expect(repo.deleteProduct('')).rejects.toThrow();
    });

    test('Then the method getAllProducts should throw an error', async () => {
      await expect(repo.getAllProducts()).rejects.toThrow();
    });

    test('Then the method getProductById should throw an error', async () => {
      await expect(repo.getProductById('')).rejects.toThrow();
    });
  });
});
