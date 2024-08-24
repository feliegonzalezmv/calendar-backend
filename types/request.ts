import { Request } from "express";

export type CustomRequest = Request & {
  uid: string;
  name: string;
};
