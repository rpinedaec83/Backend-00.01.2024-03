import { connect } from "mongoose";
import { MONGO_URI } from "./config";

export const initializeDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};