// src/middleware/errorHandler.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/http.error';

export function errorHandler(
  err: HttpError | Error,
  _req: Request,
 res: Response,
  _next: NextFunction
) {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
