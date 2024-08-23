import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

export const loginUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

export const revalidateToken = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
