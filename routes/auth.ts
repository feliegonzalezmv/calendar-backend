import { Router } from "express";
import { createUser, loginUser, revalidateToken } from "../controllers/auth";
import { check } from "express-validator";

const router = Router();

router.post(
  "/new",
  [
    check("name", "name is mandatory").not().isEmpty(),
    check("email", "email incorrect").isEmail(),
    check("password", "password must be contain 6 letters").isLength({
      min: 6,
    }),
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "email incorrect").isEmail(),
    check("password", "password must be contain 6 letters").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.get("/renew", revalidateToken);

export default router;
