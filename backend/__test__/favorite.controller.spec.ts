// /__test__/favorite.controller.spec.ts

import request from 'supertest';
import app from '../src/index';
import { FavoriteService } from '../src/services/favorite.service';

jest.mock("../src/services/favorite.service.ts");

describe('FavoriteController', () => {
  let favoriteService: jest.Mocked<FavoriteService>;

  beforeEach(() => {
    favoriteService = new FavoriteService() as jest.Mocked<FavoriteService>;
    jest.clearAllMocks();
  });

  describe('GET /api/favorites', () => {
    it('should return 400 if userId is not provided', async () => {
      const response = await request(app).get('/api/favorites');
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId is required' });
    });

    it('should return 200 and the list of favorites', async () => {
      const mockFavorites = [{ id: 1, userId: 'user1', productId: 'product1' }];
      favoriteService.getFavorites.mockResolvedValue(mockFavorites);

      const response = await request(app)
        .get('/api/favorites')
        .query({ userId: 'user1' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFavorites);
    });
  });

  describe('POST /api/favorites', () => {
    it('should return 400 if userId or productId is not provided', async () => {
      let response = await request(app).post('/api/favorites').send({});
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });

      response = await request(app).post('/api/favorites').send({ userId: 'user1' });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });
    });

    it('should return 200 and the added favorite', async () => {
      const mockFavorite = { id: 1, userId: 'user1', productId: 'product1' };
      favoriteService.addFavorite.mockResolvedValue(mockFavorite);

      const response = await request(app).post('/api/favorites').send({
        userId: 'user1',
        productId: 'product1',
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFavorite);
    });
  });

  describe('DELETE /api/favorites', () => {
    it('should return 400 if userId or productId is not provided', async () => {
      let response = await request(app).delete('/api/favorites').send({});
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });

      response = await request(app).delete('/api/favorites').send({ userId: 'user1' });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });
    });

    it('should return 204 if the favorite is removed', async () => {
      favoriteService.removeFavorite.mockResolvedValue();

      const response = await request(app).delete('/api/favorites').send({
        userId: 'user1',
        productId: 'product1',
      });

      expect(response.status).toBe(204);
    });
  });
});
