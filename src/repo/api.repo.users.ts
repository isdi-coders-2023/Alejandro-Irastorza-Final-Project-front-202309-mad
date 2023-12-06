import { User } from '../entities/user.js';

export class ApiRepoUsers {
  apiUrl = 'http://localhost:2800/users';

  async userLogin(registeredUser: Partial<User>): Promise<User> {
    // Quiero recibir un email y una passord
    const finalUrl = `${this.apiUrl}/admin/login`;
    const apiResponse = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(registeredUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!apiResponse.ok) {
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    }
    return apiResponse.json();
  }

  async userRegister(userToRegister: FormData): Promise<User> {
    const finalUrl = `${this.apiUrl}/admin/register`;
    const apiResponse = await fetch(finalUrl, {
      method: 'POST',
      body: userToRegister,
    });
    if (!apiResponse.ok)
      throw new Error(apiResponse.status + ' ' + apiResponse.statusText);
    return apiResponse.json();
  }
}
