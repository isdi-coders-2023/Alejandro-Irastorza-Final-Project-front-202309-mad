import { ImgData } from '../types/img.data';
import { User } from './user';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  modelImg: ImgData;
  refImg: ImgData;
  new: boolean;
  noStock: boolean;
  topOrder: boolean;
  creator: User;
};
