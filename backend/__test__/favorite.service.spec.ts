// /__tests__/favorite.service.spec.ts

import Favorite from "../src/entities/fav.entity";
import { FavoriteService } from "../src/services/favorite.service";


describe('FavoriteService', () => {
  let favoriteService: FavoriteService;
  const MOCK_FAVORITES: Favorite[]= [
    { userId: 'user1', productId: 'product1' },
    { userId: 'user1', productId: 'product2' },
    { userId: 'user2', productId: 'product3' },
    { userId: 'user2', productId: 'product4' },
    { userId: 'user3', productId: 'product5' },
    { userId: 'user3', productId: 'product6' },
    { userId: 'user4', productId: 'product7' },
    { userId: 'user4', productId: 'product8' },
    { userId: 'user5', productId: 'product9' },
    { userId: 'user5', productId: 'product10' },
    { userId: 'user6', productId: 'product11' },
    { userId: 'user6', productId: 'product12' },
    { userId: 'user7', productId: 'product13' },
    { userId: 'user7', productId: 'product14' },
    { userId: 'user8', productId: 'product15' }
  ];

  beforeAll(() => {
    favoriteService = new FavoriteService();
  });

  test('should add favorites', async () => {

    for (const favoriteData of MOCK_FAVORITES) {
      const { userId, productId } = favoriteData;
      const favorite = await favoriteService.addFavorite({userId, productId});
      expect(favorite).toHaveProperty('userId', userId);
      expect(favorite).toHaveProperty('productId', productId);
    }
  });

  test('should get favorites', async () => {
    const favorites = await favoriteService.getFavorites(MOCK_FAVORITES[0].userId);
    expect(favorites).toEqual(MOCK_FAVORITES.filter(fav => fav.userId === MOCK_FAVORITES[0].userId));

  });

  test('should remove a favorite', async () => {
    await favoriteService.removeFavorite(MOCK_FAVORITES[0]);
    await favoriteService.removeFavorite(MOCK_FAVORITES[1]);
    const favorites = await favoriteService.getFavorites('user1');
    expect(favorites).toEqual([]);
  });

  test('should handle non-existent favorite removal gracefully', async () => {
    await expect(favoriteService.removeFavorite({
      userId: 'user1', productId: 'non-existent-product'
    })).resolves.toBeUndefined();
  });
});
