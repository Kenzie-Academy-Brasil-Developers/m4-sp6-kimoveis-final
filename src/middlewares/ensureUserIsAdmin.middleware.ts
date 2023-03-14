import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors";

const ensureUserIsAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureUserIsAdminMiddleware;
