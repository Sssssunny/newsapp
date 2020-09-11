import { article_url, cate_ge, cate_sc, cate_he, country_code, __api_key } from '../config/rest_config';
import axios from 'axios';

export const getArticlesGeneral = async () => {
  try {
    const articles = await axios.get(`${article_url}?country=${country_code}&category=${cate_ge}&apiKey=${__api_key}`);
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
}

export const getArticlesScience = async () => {
  try {
    const articles = await axios.get(`${article_url}?country=${country_code}&category=${cate_sc}&apiKey=${__api_key}`);
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
}

export const getArticlesHealth = async () => {
  try {
    const articles = await axios.get(`${article_url}?country=${country_code}&category=${cate_he}&apiKey=${__api_key}`);
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
}