const { Router } = require("express");
const router = new Router();
const Articles = require("./model");
const calculateBullshitScore = require("../algorithm/bullshitScore");
const calculateSentimentScore = require("../algorithm/sentimentScore");

router.post("/calculateScore", async (req, res, next) => {
  try {
    await Articles.create(req.body);
    const text = req.body.text;
    const sentimentScore = await calculateSentimentScore(text);
    const bullshitScore = calculateBullshitScore(sentimentScore);

    res.json(bullshitScore);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
