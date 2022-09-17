import { Rent } from '../components/rent/rent.types';
import validator from 'validator';
// pickup dashboard : do validation for pickup name and nim
// return dashboard : do validation for return name and nim
// log dashboard : no need for validation (no edit/add)

export const validatePickupForm = (formData: Rent) => {
  const { pickupName, pickupNim } = formData;
  const res = {
    error: false,
    result: {
      pickupName: '',
      pickupNim: '',
    },
  };
  // pickupName min 4
  if (pickupName && pickupName.length < 4) {
    res.error = true;
    res.result.pickupName = 'Name minimum length is 4 !';
  }
  // pickupName max 25
  if (pickupName && pickupName.length > 25) {
    res.error = true;
    res.result.pickupName = 'Name maximum length is 25 !';
  }
  //   pickupName not empty
  if (!pickupName) {
    res.error = true;
    res.result.pickupName = 'Name cannot be empty !';
  }

  // pickupNim is int
  if (pickupNim && (!validator.isInt(pickupNim) || Number(pickupNim) < 0)) {
    res.error = true;
    res.result.pickupNim = 'NIM not proper !';
  }

  // pickupNim length is not 8
  if (pickupNim?.length !== 8) {
    res.error = true;
    res.result.pickupNim = 'NIM not proper !';
  }
  // pickupNim not empty
  if (!pickupNim) {
    res.error = true;
    res.result.pickupNim = 'NIM cannot be empty !';
  }

  return res;
};

export const validateReturnForm = (formData: Rent) => {
  const { returnName, returnNim } = formData;
  const res = {
    error: false,
    result: {
      returnName: '',
      returnNim: '',
    },
  };
  // returnName min 4
  if (returnName && returnName.length < 4) {
    res.error = true;
    res.result.returnName = 'Name minimum length is 4 !';
  }
  // returnName max 25
  if (returnName && returnName.length > 25) {
    res.error = true;
    res.result.returnName = 'Name maximum length is 25 !';
  }
  //   returnName not empty
  if (!returnName) {
    res.error = true;
    res.result.returnName = 'Name cannot be empty !';
  }
  // returnNim is int
  if (returnNim && (!validator.isInt(returnNim) || Number(returnNim) < 0)) {
    res.error = true;
    res.result.returnNim = 'NIM not proper !';
  }
  // returnNim length is not 8
  if (returnNim?.length !== 8) {
    res.error = true;
    res.result.returnNim = 'NIM not proper !';
  }
  // returnNim not empty
  if (!returnNim) {
    res.error = true;
    res.result.returnNim = 'NIM cannot be empty !';
  }
  return res;
};
