/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {removeProductToFavorite} from '~/api/service';

const useRemoveToFavorites = (productId) => {
  const [isLoading, setIsLoading] = useState(false);

  const removeToFavorites = async () => {
    setIsLoading(true);
    const response = await removeProductToFavorite(productId);
    setIsLoading(false);
    return response;
  };

  return {isLoading, removeToFavorites};
};

export default useRemoveToFavorites;
