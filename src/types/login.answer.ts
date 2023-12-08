import { User } from '../entities/user.js';

export type LoginAnswer = {
  user: User;
  token: string;
};
