import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query Articles {
    articles {
      id
      createdAt
      title
      desc
      imageUrl
      publishedDate
      duration
      link
    }
  }
`;

export const GET_ARTICLE = gql`
  query Article($articleId: Int!) {
    article(id: $articleId) {
      id
      createdAt
      title
      desc
      imageUrl
      publishedDate
      duration
      link
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation CreateArticle($createArticleInput: CreateArticleInput!) {
    createArticle(createArticleInput: $createArticleInput) {
      id
      title
      desc
      imageUrl
      publishedDate
      duration
      link
    }
  }
`;
export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($updateArticleInput: UpdateArticleInput!) {
    updateArticle(updateArticleInput: $updateArticleInput) {
      id
      createdAt
      title
      desc
      imageUrl
      publishedDate
      duration
      link
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation RemoveArticle($removeArticleId: Int!) {
    removeArticle(id: $removeArticleId) {
      id
      createdAt
      title
      desc
      imageUrl
      publishedDate
      duration
      link
    }
  }
`;
