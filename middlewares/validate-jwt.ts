import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CustomRequest } from "../types/request";

export const validateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No token on authentication",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    ) as JwtPayload;
    const { uid, name } = decoded;
    req.uid = uid;
    req.name = name;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid token",
    });
  }
};
