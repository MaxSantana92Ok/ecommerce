// src/repositories/mock.repository.ts

import { IFavoriteRepository } from "./favorite.respository";

interface Favorite {
  userId: string;
  productId: string;
}

export class MockRepository implements IFavoriteRepository {
  private favorites: Favorite[] = [];

  async getFavorites(userId: string): Promise<Favorite[]> {
    console.log('Retrive favs for user:', userId);
    return this.favorites.filter(fav => fav.userId === userId);
  }

  async addFavorite(params: {userId: string, productId: string}): Promise<Favorite> {
    const {userId, productId} = params;
    const favorite = { userId, productId };
    this.favorites.push(favorite);
    return favorite;
  }

  async removeFavorite(params: {userId: string, productId: string}): Promise<void> {
    const {userId, productId} = params;
    this.favorites = this.favorites.filter(
      fav => !(fav.userId === userId && fav.productId === productId)
    );
  }
}
