// src/repositories/prisma.respository.ts

import { PrismaClient } from '@prisma/client';
import { IFavoriteRepository } from './favorite.respository';
import Favorite from '../entities/fav.entity';

const prisma = new PrismaClient();

export class PrismaRepository implements IFavoriteRepository {
  async getFavorites(userId: string): Promise<Favorite[]> {
    return prisma.favorite.findMany({ where: { userId } });
  }

  async addFavorite(params: {userId: string, productId: string}): Promise<Favorite> {
    const {userId, productId} = params
    return prisma.favorite.create({ data: { userId, productId } });
  }

  async removeFavorite(params: {userId: string, productId: string}): Promise<void> {
    const {userId, productId} = params
    await prisma.favorite.delete({ 
      where: {
      userId_productId: {
        userId,
        productId
      }
    }});
  }
}
