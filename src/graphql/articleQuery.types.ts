import { ArticleRaw } from "../components/article/article.types";

export interface CreateArticleInput {
  createArticleInput: {
    title: string;
    desc: string;
    imageUrl: string;
    publishedDate: string;
    duration: number;
    link: string;
  };
}

export interface UpdateArticleInput {
  updateArticleInput: {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
    publishedDate: string;
    duration: number;
    link: string;
  };
}

export interface GetArticlesResponse {
  articles: ArticleRaw[];
}

export interface GetArticlesResponseRest {
  status: String;
  data: ArticleRaw[];
  message: String;
}

export interface AddArticlesResponse {
  createArticle: ArticleRaw[];
}

export interface UpdateArticleResponse {
  updateArticle: ArticleRaw[];
}

export interface DeleteArticlesResponse {
  removeArticle: ArticleRaw[];
}
