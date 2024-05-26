// /src/routes/fav.routes.ts

import { Router } from 'express';
import { FavoriteController } from '../controllers/favorite.controller';

const router = Router();
const favoriteController = new FavoriteController();

router.get('/', (req, res, next) => favoriteController.getFavorites(req, res, next));
router.post('/', (req, res, next) => favoriteController.addFavorite(req, res, next));
router.delete('/', (req, res, next) => favoriteController.removeFavorite(req, res, next));

export { router as favoriteRouter };
