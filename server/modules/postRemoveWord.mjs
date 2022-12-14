/**
 * @description Remove word to `app.locals.settings.wordData` and send it back to front
 * @param {number} req.body.data - remove target index
 */
import express from "express";
const mPostRemoveWord = express.Router();

mPostRemoveWord.post("/", async (req, res, next) => {
  req.app.get("wordData").splice(req.body.data, 1);
  res.send(req.app.get("wordData"));
  next();
});

export default mPostRemoveWord;