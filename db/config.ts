import mongoose from "mongoose";
import dotenv from "dotenv";
import e from "express";

dotenv.config();

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN, {});

    console.log("Db online");
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Error on connection to db");
  }
};
