import { Router } from "express";
import { check } from "express-validator";
import { validateJWT } from "../middlewares/validate-jwt";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/events";

const router = Router();

router.use(validateJWT);

router.get("/", getEvents);

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

export default router;
