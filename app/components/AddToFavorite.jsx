/* eslint-disable prettier/prettier */
import React from 'react';

const AddToFavorite = ({
  productId,
  handleFavoriteClick,
  isFavorite,
  disabled,
  isLoading,
}) => {
  return (
    <button
      style={{border: isFavorite ? '2px solid red' : '2px solid green'}}
      disabled={disabled}
      onClick={() => handleFavoriteClick(productId)}
    >
      {!isLoading && (isFavorite ? 'Remove favorite' : 'Add to favorite')}
      {isLoading && 'Adding...'}
    </button>
  );
};

export default AddToFavorite;
