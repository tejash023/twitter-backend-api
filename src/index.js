import express from "express";
import { connect } from "./config/database.js";

const app = express();

app.listen(3000, async () => {
  console.log("Server is up and running");
  await connect();
  console.log("MongoDB connected");
});
