import { Article } from '../components/article/article.types';
import validator from 'validator';

export const validateArticleForm = (formData: Article) => {
  const { title, desc, imageUrl, publishedDate, duration, link } = formData;
  const res = {
    error: false,
    result: {
      title: '',
      desc: '',
      imageUrl: '',
      publishedDate: '',
      duration: '',
      link: '',
    },
  };
  // title min 5 max 50
  if (title.length < 5 || title.length > 50) {
    res.error = true;
    res.result.title = 'Title minimum length is 5 and maximum length is 50';
  }
  //   title not empty
  if (!title) {
    res.error = true;
    res.result.title = 'Title cannot be empty';
  }
  // desc min 5 max 250
  if (desc.length < 5 || desc.length > 250) {
    res.error = true;
    res.result.desc = 'Desc minimum length is 5 and maximum length is 250';
  }
  //   desc not empty
  if (!desc) {
    res.error = true;
    res.result.desc = 'Desc cannot be empty';
  }
  // imageUrl is properUrl
  if (!validator.isURL(imageUrl)) {
    res.error = true;
    res.result.imageUrl = 'ImageUrl is not a valid url';
  }
  //   imageUrl not empty
  if (!imageUrl) {
    res.error = true;
    res.result.imageUrl = 'Image URL cannot be empty';
  }
  // publishedDate is date
  if (!(publishedDate instanceof Date)) {
    res.error = true;
    res.result.publishedDate = 'PublishedDate must be a proper date';
  }
  //   publishedDate not empty
  if (!publishedDate) {
    res.error = true;
    res.result.publishedDate = 'Date cannot be empty';
  }
  // duration is int
  if (!validator.isInt(duration.toString()) || duration <= 0) {
    res.error = true;
    res.result.duration = 'Duration must be a positive integer';
  }
  //   duration not empty
  if (!duration) {
    res.error = true;
    res.result.duration = 'Duration cannot be empty';
  }
  // link is properUrl
  if (!validator.isURL(link)) {
    res.error = true;
    res.result.link = 'Link is not a valid url';
  }
  //   link not empty
  if (!link) {
    res.error = true;
    res.result.link = 'Link cannot be empty';
  }
  return res;
};
