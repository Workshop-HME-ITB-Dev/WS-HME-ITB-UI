import validator from 'validator';
import { Tool } from '../components/rent/rent.types';

export const validateToolForm = (formData: Tool) => {
  const { name, totalStock, priceHour, priceDay } = formData;
  const res = {
    error: false,
    result: {
      name: '',
      image: '',
      totalStock: '',
      priceHour: '',
      priceDay: '',
    },
  };
  // Name length minimum 4, max 30
  if (name.length < 4) {
    res.error = true;
    res.result.name = 'Name minimum length is 4 !';
  }
  if (name.length > 30) {
    res.error = true;
    res.result.name = 'Name maximum length is 25 !';
  }
  // name not empty
  if (!name) {
    res.error = true;
    res.result.name = 'Name cannot be empty !';
  }

  // totalStock is integer
  if (!validator.isInt(totalStock.toString()) || totalStock < 0) {
    res.error = true;
    res.result.totalStock = 'Total Stock must be positive integer !';
  }
  //   totalStock not empty
  if (!totalStock.toString()) {
    res.error = true;
    res.result.totalStock = 'Stock cannot be empty !';
  }
  // priceHour is integer
  if (!validator.isInt(priceHour.toString()) || priceHour <= 0) {
    res.error = true;
    res.result.priceHour = 'Price must be positive integer !';
  }
  //   priceHour not empty
  if (!priceHour) {
    res.error = true;
    res.result.priceHour = 'Price cannot be empty !';
  }
  // priceDay is integer
  if (!validator.isInt(priceDay.toString()) || priceDay <= 0) {
    res.error = true;
    res.result.priceDay = 'Price must be positive integer !';
  }
  //   priceDay not empty
  if (!priceDay) {
    res.error = true;
    res.result.priceDay = 'Price cannot be empty !';
  }

  return res;
};
