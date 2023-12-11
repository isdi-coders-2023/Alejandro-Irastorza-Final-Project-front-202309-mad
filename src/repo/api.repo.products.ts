import { Product } from '../entities/product';

export class ApiRepoProducts {
  apiUrl = 'http://localhost:2800/products';

  async createProduct(newProduct: FormData): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/add`;
    const apiResponse = await fetch(finalUrl, {
      method: 'POST',
      body: newProduct,
    });
    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    return apiResponse.json();
  }

  async updateProduct(
    id: string,
    updatedProduct: Partial<Product>
  ): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/add/${id}`;
    const apiResponse = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    return apiResponse.json();
  }

  async deleteProduct(id: string): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/delete/${id}`;
    const apiResponse = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    return {} as Product;
  }

  async getAllProducts(): Promise<Product[]> {
    const finalUrl = `${this.apiUrl}`;
    const apiResponse = await fetch(finalUrl, {
      method: 'GET',
    });

    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);

    return apiResponse.json();
  }

  async getProductById(id: string): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/find/${id}`;
    const apiResponse = await fetch(finalUrl, {
      method: 'GET',
    });
    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);

    return apiResponse.json();
  }
}
