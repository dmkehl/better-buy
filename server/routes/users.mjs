import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collectio("users");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

export default router;
