import React from 'react';

const AddToFavorite = ({productId, handleFavoriteClick, isFavorite}) => {
  return (
    <button onClick={() => handleFavoriteClick(productId)}>
      {isFavorite ? 'Remove favorite' : 'Add to favorite'}
    </button>
  );
};

export default AddToFavorite;
