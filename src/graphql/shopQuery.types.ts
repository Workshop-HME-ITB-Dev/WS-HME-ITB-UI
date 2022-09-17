import { Product } from '../components/shop/shop.types';

export interface CreateShopInput {
  createShopInput: {
    title: string;
    imageUrl: string;
    link: string;
    price: number;
  };
}

export interface UpdateShopInput {
  updateShopInput: {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
    price: number;
  };
}

export interface GetShopResponse {
  shop: Product;
}

export interface GetShopsResponse {
  shops: Product[];
}

export interface CreateShopResponse {
  createShop: Product;
}

export interface UpdateShopResponse {
  updateShop: Product;
}

export interface RemoveShopResponse {
  removeShop: Product;
}
