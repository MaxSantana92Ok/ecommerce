/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {removeProductToFavorite} from '~/api/service';

const useRemoveToFavorites = () => {
  const [isLoading, setIsLoading] = useState(false);

  const removeToFavorites = async (productId) => {
    const userId = localStorage.getItem('userId');
    setIsLoading(true);
    const response = await removeProductToFavorite({userId, productId});
    setIsLoading(false);
    return response;
  };

  return {isLoading, removeToFavorites};
};

export default useRemoveToFavorites;
