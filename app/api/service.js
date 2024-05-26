/* eslint-disable prettier/prettier */
import {routes} from './config';
import API from './instance';

export const addProductToFavorite = async (id) => {
  return await API.post(`${routes.favorites}`, id);
};

export const removeProductToFavorite = async (id) => {
  return await API.delete(`${routes.favorites}/${id}`);
};
