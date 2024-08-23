import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

export const revalidateToken = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};
