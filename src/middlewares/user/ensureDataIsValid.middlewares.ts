import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValidMiddleWare =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const dataValidated = schema.parse(req.body);
    console.log("aaaaaaaaaaa");
    req.body = dataValidated;

    return next();
  };

export default ensureDataIsValidMiddleWare;
