/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {addProductToFavorite} from '~/api/service';

const useAddToFavorites = (productId) => {
  const [isLoading, setIsLoading] = useState(false);

  const addToFavorites = async () => {
    setIsLoading(true);
    const response = await addProductToFavorite(productId);
    setIsLoading(false);
    return response;
  };

  return {isLoading, addToFavorites};
};

export default useAddToFavorites;
