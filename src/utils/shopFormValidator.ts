import validator from 'validator';
import { Product } from '../components/shop/shop.types';

export const validateShopForm = (formData: Product) => {
  const { title, imageUrl, link, price } = formData;
  const res = {
    error: false,
    result: {
      title: '',
      imageUrl: '',
      link: '',
      price: '',
    },
  };

  // title min 5 max 50
  if (title.length < 5 || title.length > 50) {
    res.error = true;
    res.result.title = 'Title minimum length is 5 and maximum length is 50';
  }
  // title not empty
  if (!title) {
    res.error = true;
    res.result.title = 'Title cannot be empty';
  }
  // imageUrl is properUrl
  if (!validator.isURL(imageUrl)) {
    res.error = true;
    res.result.imageUrl = 'imageUrl is not a valid url';
  }
  // imageUrl not empty
  if (!imageUrl) {
    res.error = true;
    res.result.imageUrl = 'ImageUrl cannot be empty';
  }
  // link is properUrl
  if (!validator.isURL(link)) {
    res.error = true;
    res.result.link = 'link is not a valid url';
  }
  // link not empty
  if (!link) {
    res.error = true;
    res.result.link = 'Link cannot be empty';
  }
  // price is int
  if (!validator.isInt(price.toString()) || price <= 0) {
    res.error = true;
    res.result.price = 'price must be a positive integer';
  }
  // price not empty and not 0
  if (!price || price === 0) {
    res.error = true;
    res.result.price = 'Price cannot be empty';
  }
  return res;
};
