async function calculateSentimentScore(text) {
  const language = require("@google-cloud/language");
  const client = new language.LanguageServiceClient();

  const document = {
    content: text,
    type: "PLAIN_TEXT"
  };

  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;

  const { score, magnitude } = sentiment;
  const sentimentScoreAndMagnitude = {
    score: score,
    magnitude: magnitude,
    text
  };

  return sentimentScoreAndMagnitude;
}

module.exports = calculateSentimentScore;
