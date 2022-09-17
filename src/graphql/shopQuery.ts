import { gql } from '@apollo/client';

export const GET_SHOPS = gql`
  query Shops {
    shops {
      id
      createdAt
      title
      imageUrl
      link
      price
    }
  }
`;

export const GET_SHOP = gql`
  query Shop($shopId: Int!) {
    shop(id: $shopId) {
      id
      createdAt
      title
      imageUrl
      link
      price
    }
  }
`;

export const CREATE_SHOP = gql`
  mutation CreateShop($createShopInput: CreateShopInput!) {
    createShop(createShopInput: $createShopInput) {
      id
      createdAt
      title
      imageUrl
      link
      price
    }
  }
`;

export const UPDATE_SHOP = gql`
  mutation UpdateShop($updateShopInput: UpdateShopInput!) {
    updateShop(updateShopInput: $updateShopInput) {
      id
      createdAt
      title
      imageUrl
      link
      price
    }
  }
`;

export const DELETE_SHOP = gql`
  mutation RemoveShop($removeShopId: Int!) {
    removeShop(id: $removeShopId) {
      id
      createdAt
      title
      imageUrl
      link
      price
    }
  }
`;
