import { Product } from '../entities/product';
import { User } from '../entities/user';

export class ApiRepoProducts {
  apiUrl = 'http://localhost:2800/products';

  async createProduct(
    newProduct: FormData,
    userId: User['id']
  ): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/add/` + userId;
    const apiResponse = await fetch(finalUrl, {
      method: 'POST',
      body: newProduct,
    });
    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    return apiResponse.json();
  }

  async updateProduct(id: string, updatedProduct: FormData): Promise<Product> {
    const finalUrl = `${this.apiUrl}/admin/update/${id}`;
    const apiResponse = await fetch(finalUrl, {
      method: 'PATCH',
      body: updatedProduct,
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

  async getProductByCategory(category: string): Promise<Product[]> {
    const finalUrl = `${this.apiUrl}/admin/category/${category}`;

    const apiResponse = await fetch(finalUrl, {
      method: 'GET',
    });

    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);

    return apiResponse.json();
  }
}
