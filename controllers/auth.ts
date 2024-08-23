import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const createUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  console.log("errors :>> ", errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
