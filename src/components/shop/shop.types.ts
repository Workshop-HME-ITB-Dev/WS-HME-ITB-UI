export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  price: number;
}

export interface ProductError {
  title: string;
  imageUrl: string;
  link: string;
  price: string;
}
