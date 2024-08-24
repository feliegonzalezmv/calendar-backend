import { Request, Response } from "express";

export const getEvents = async (req: Request, res: Response) => {
  try {
    res.json({
      ok: true,
      msg: "getEvents",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  console.log("req.body :>> ", req.body);
  try {
    res.status(201).json({
      ok: true,
      msg: "createEvent",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    res.json({
      ok: true,
      msg: "updateEvent",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    res.json({
      ok: true,
      msg: "deleteEvent",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk with the administrator",
    });
  }
};
