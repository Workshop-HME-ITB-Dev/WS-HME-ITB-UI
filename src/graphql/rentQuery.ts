import { gql } from '@apollo/client';

export const GET_RENTS = gql`
  query Rents {
    rents {
      id
      tools
      rentName
      rentNim
      rentPhone
      rentLineId
      organisation
      fromDate
      expectedReturnDate
      status
      totalPrice
      fine
      pickupName
      pickupNim
      returnName
      returnNim
      returnDate
    }
  }
`;

export const GET_RENT_DATES = gql`
  query Rentdates {
    rentdates {
      tools
      fromDate
      expectedReturnDate
      status
    }
  }
`;

export const GET_RENT = gql`
  query Rent($rentId: Int!) {
    rent(id: $rentId) {
      id
      createdAt
      tools
      rentName
      rentNim
      rentPhone
      rentLineId
      organisation
      fromDate
      expectedReturnDate
      status
      totalPrice
      fine
      pickupName
      pickupNim
      returnName
      returnNim
      returnDate
    }
  }
`;

export const CREATE_RENT = gql`
  mutation CreateRent($createRentInput: CreateRentInput!) {
    createRent(createRentInput: $createRentInput) {
      id
      createdAt
      tools
      rentName
      rentNim
      rentPhone
      rentLineId
      organisation
      fromDate
      expectedReturnDate
      status
      totalPrice
      fine
      pickupName
      pickupNim
      returnName
      returnNim
      returnDate
    }
  }
`;

export const UPDATE_RENT = gql`
  mutation UpdateAdmin($updateRentInput: UpdateRentInput!) {
    updateRent(updateRentInput: $updateRentInput) {
      id
      createdAt
      tools
      rentName
      rentNim
      rentPhone
      rentLineId
      organisation
      fromDate
      expectedReturnDate
      status
      totalPrice
      fine
      pickupName
      pickupNim
      returnName
      returnNim
      returnDate
    }
  }
`;

export const DELETE_RENT = gql`
  mutation RemoveRent($removeRentId: Int!) {
    removeRent(id: $removeRentId) {
      id
      createdAt
      tools
      rentName
      rentNim
      rentPhone
      rentLineId
      organisation
      fromDate
      expectedReturnDate
      status
      totalPrice
      fine
      pickupName
      pickupNim
      returnName
      returnNim
      returnDate
    }
  }
`;
