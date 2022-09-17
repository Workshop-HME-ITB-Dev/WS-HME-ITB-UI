export interface Article {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: Date;
  duration: number;
  link: string;
}
export interface ArticleError {
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: string;
  duration: string;
  link: string;
}
export interface ArticleRaw {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  publishedDate: string;
  duration: number;
  link: string;
}
