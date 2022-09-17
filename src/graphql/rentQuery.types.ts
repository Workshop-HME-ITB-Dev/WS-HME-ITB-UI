import { RentDateRaw, RentRaw } from '../components/rent/rent.types';

export interface CreateRentInput {
  createRentInput: {
    tools: string;
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: string;
    expectedReturnDate: string;
    status: string;
    totalPrice: number;
  };
}

export interface UpdateRentInput {
  updateRentInput: {
    id: number;
    rentName: string;
    rentNim: string;
    rentPhone: string;
    rentLineId: string;
    organisation: string;
    fromDate: string;
    expectedReturnDate: string;
    status: string;
    totalPrice: number;
    fine?: number;
    pickupName?: string;
    pickupNim?: string;
    returnName?: string;
    returnNim?: string;
    returnDate?: string;
  };
}

export interface GetRentsResponse {
  rents: RentRaw[];
  errors?: any[];
}

export interface GetRentDatesResponse {
  rentdates: RentDateRaw[];
  errors?: any[];
}

export interface CreateRentResponse {
  createRent: RentDateRaw[];
  errors?: any[];
}

export interface UpdateRentResponse {
  updateRent: RentDateRaw[];
  errors?: any[];
}

export interface RemoveRentResponse {
  removeRent: RentDateRaw[];
  errors?: any[];
}
