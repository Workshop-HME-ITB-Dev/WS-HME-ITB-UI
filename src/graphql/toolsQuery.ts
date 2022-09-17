import { gql } from '@apollo/client';

export const GET_TOOLS = gql`
  query Tools {
    tools {
      id
      createdAt
      name
      image
      activated
      totalStock
      priceHour
      priceDay
    }
  }
`;

export const CREATE_TOOL = gql`
  mutation CreateTool($createToolInput: CreateToolInput!) {
    createTool(createToolInput: $createToolInput) {
      id
      createdAt
      name
      image
      activated
      totalStock
      priceHour
      priceDay
    }
  }
`;

export const GET_TOOL = gql`
  query Tool($toolId: Int!) {
    tool(id: $toolId) {
      id
      createdAt
      name
      image
      activated
      totalStock
      priceHour
      priceDay
    }
  }
`;

export const UPDATE_TOOL = gql`
  mutation UpdateTool($updateToolInput: UpdateToolInput!) {
    updateTool(updateToolInput: $updateToolInput) {
      id
      createdAt
      name
      image
      activated
      totalStock
      priceHour
      priceDay
    }
  }
`;

export const DELETE_TOOL = gql`
  mutation RemoveTool($removeToolId: Int!) {
    removeTool(id: $removeToolId) {
      id
      createdAt
      name
      image
      activated
      totalStock
      priceHour
      priceDay
    }
  }
`;
