import { RentFormData } from '../components/rent/rent.types';
import validator from 'validator';
import moment from 'moment';

export const validateRentFormError = (step: number, formData: RentFormData) => {
  const {
    name,
    nim,
    organisation,
    phone,
    line,
    pickupDate,
    pickupHour,
    pickupMinute,
    returnDate,
    returnHour,
    returnMinute,
    tools,
    totalPrice,
  } = formData;
  const res = {
    error: false,
    result: {
      name: '',
      nim: '',
      organisation: '',
      phone: '',
      line: '',
      pickupDate: '',
      returnDate: '',
      tools: '',
      totalPrice: '',
    },
  };
  if (step === 0) {
    // check name, nim, organisation, phone, line
    // Name - not empty, 4<length<25
    if (name.length < 4) {
      res.error = true;
      res.result.name = 'Name minimum length is 4 !';
    }
    if (name.length > 25) {
      res.error = true;
      res.result.name = 'Name maximum length is 25 !';
    }
    if (!name) {
      res.error = true;
      res.result.name = 'Name must not be empty !';
    }
    // nim - not empty, positives integer
    if (!Number.isInteger(Number(nim)) || Number(nim) <= 0) {
      res.error = true;
      res.result.nim = 'NIM field must be valid !';
    }
    // nim length is not 8
    if (nim.length !== 8) {
      res.error = true;
      res.result.nim = 'NIM field must be valid !';
    }
    if (!nim) {
      res.error = true;
      res.result.nim = 'NIM must not be empty !';
    }
    // organisation - not empty, <25
    if (organisation.length > 25) {
      res.error = true;
      res.result.organisation = 'Organisation maximum length is 25 !';
    }
    if (!organisation) {
      res.error = true;
      res.result.organisation = 'Organisation must not be empty !';
    }
    // phone - not empty, valid phone number
    if (!validator.isMobilePhone(phone)) {
      res.error = true;
      res.result.phone = 'Must be valid phone number !';
    }
    if (!phone) {
      res.error = true;
      res.result.phone = 'Phone must not be empty !';
    }
    // line - not empty , length<25
    if (line.length > 25) {
      res.error = true;
      res.result.line = 'LineID maximum length is 25 !';
    }
    if (!line) {
      res.error = true;
      res.result.line = 'LineID must not be empty !';
    }
  } else if (step === 1) {
    // pickupDate >= current date , not empty
    // pickupHour >= Current Hour , not empty
    // pickupMinute >= Current Minute , not empty
    // returnDate >= pickupDate , not empty
    // returnHour not empty
    // returnMinute not empty
    const pickupDateFull = new Date(pickupDate);
    pickupDateFull.setHours(pickupHour);
    pickupDateFull.setMinutes(pickupMinute);
    if (moment().isAfter(pickupDateFull)) {
      res.error = true;
      res.result.pickupDate = 'Date cannot be earlier than today !';
    }
    if (!pickupDate) {
      res.error = true;
      res.result.pickupDate = 'Date cannot be empty !';
    }
    const returnDateFull = new Date(returnDate);
    returnDateFull.setHours(returnHour);
    returnDateFull.setMinutes(returnMinute);
    if (moment(pickupDateFull).isAfter(returnDateFull)) {
      res.error = true;
      res.result.returnDate = 'Date cannot be earlier than pickup date !';
    }
    if (!returnDate) {
      res.error = true;
      res.result.returnDate = 'Date cannot be empty !';
    }
  } else if (step === 2) {
    // tools not empty
    // foreach, check toolId and quantity not empty and positive integer
    tools.forEach(({ toolId, quantity }, idx) => {
      if (
        !Number.isInteger(toolId) ||
        !Number.isInteger(quantity) ||
        toolId < 0 ||
        quantity < 0
      ) {
        res.error = true;
        res.result.tools = 'tools not valid !';
      }
    });
    if (tools.length === 0) {
      res.error = true;
      res.result.tools = 'Tools cannot be empty !';
    }
  } else if (step === 3) {
    // totalprice not empty, positive integer
    if (!totalPrice || totalPrice <= 0) {
      res.error = true;
      res.result.totalPrice = 'Total Price is not valid !';
    }
  }
  return res;
};
