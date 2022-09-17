import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation Login($createLoginInput: LoginAdminInput!) {
    login(createLoginInput: $createLoginInput) {
      accessToken
      admin {
        id
        createdAt
        email
        name
      }
    }
  }
`;

export const REGISTER_ADMIN = gql`
  mutation CreateAdmin($createAdminInput: CreateAdminInput!) {
    createAdmin(createAdminInput: $createAdminInput) {
      name
      email
      createdAt
      id
    }
  }
`;

export const GET_ADMIN = gql`
  query Admin($id: Int!) {
    admin(id: $id) {
      id
      createdAt
      email
      name
    }
  }
`;

export const GET_ADMINS = gql`
  query Admins {
    admins {
      id
      createdAt
      email
      name
    }
  }
`;
