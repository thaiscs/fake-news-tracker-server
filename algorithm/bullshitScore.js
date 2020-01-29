function calculateBullshitScore(sentimentScore) {
  console.log("hello from algorithm: ", sentimentScore);
  const { score, magnitude, text } = sentimentScore;
  const textLength = text.split(" ").length;
  const highSentimentIntensity = magnitude > score;
  const quotesCounter = text.split('"').length - 1;
  const numberOfQuotes = quotesCounter / 2;
  const quotesInRelationToText = textLength / numberOfQuotes;
  // considering each paragraph has an average of 70 words
  const excessiveQuotes = quotesInRelationToText > 70;

  let bullshitScore = 5;
  // as there's no such thing as NO BS when it comes to news

  // NEUTRAL
  if (score === 0 && magnitude > 10) {
    console.log("NEUTRAL score");
    bullshitScore += 10;
    textLength < 1500 ? (bullshitScore += 10) : bullshitScore;
    excessiveQuotes ? (bullshitScore += 10) : bullshitScore;
    const scoreRangeAndEmotion = {
      range: "NEUTRAL",
      color: "#808080",
      emotion: "No polarizing emotions were expressed.",
      tipTitle: "CHECK FACTS",
      tipContent:
        "A trustworthy article is based on a collection of facts, therefore fact checking is paramount.",
      bullshitScore
    };

    return scoreRangeAndEmotion;
  }
  // YELLOW
  if (score > -0.1 && score < 0.25) {
    console.log("YELLOW score");
    bullshitScore += 10;
    highSentimentIntensity ? (bullshitScore += 20) : bullshitScore;
    textLength < 1500 ? (bullshitScore += 10) : bullshitScore;
    excessiveQuotes ? (bullshitScore += 10) : bullshitScore;
    const scoreRangeAndEmotion = {
      range: "YELLOW",
      color: "#ffff00",
      emotion: "Slightly emotional, therefore not objective.",
      tipTitle: "TRACE SOURCE",
      tipContent:
        "Article should include author's name and all references to mentioned sources, including web link if applicable.",
      bullshitScore
    };

    return scoreRangeAndEmotion;
  }

  // RED - negative emotion
  if (score <= -0.1 && score > -1) {
    console.log("RED score");
    bullshitScore += 20;
    highSentimentIntensity ? (bullshitScore += 20) : bullshitScore;
    textLength < 1500 ? (bullshitScore += 10) : bullshitScore;
    excessiveQuotes ? (bullshitScore += 10) : bullshitScore;

    const scoreRangeAndEmotion = {
      range: "RED",
      color: "#ff0000",
      emotion: "Expresses NEGATIVE emotion, therefore not objective.",
      tipTitle: "MAY BE BIASED",
      tipContent:
        "Reliable journalism should include at least two points of view or sides of the story.",
      bullshitScore
    };
    return scoreRangeAndEmotion;
  }

  // GREEN - positive emotion
  if (score < -0.25 && score > -1) {
    console.log("GREEN score");
    bullshitScore += 20;
    highSentimentIntensity ? (bullshitScore += 20) : bullshitScore;
    textLength < 1500 ? (bullshitScore += 10) : bullshitScore;
    excessiveQuotes ? (bullshitScore += 10) : bullshitScore;
    const scoreRangeAndEmotion = {
      range: "GREENISH",
      color: "#00ff00",
      emotion: "Expresses POSITIVE emotion, therefore not objective.",
      tipTitle: "MAY BE BIASED",
      tipContent:
        "Reliable journalism should include at least two points of view or sides of the story.",
      bullshitScore
    };

    return scoreRangeAndEmotion;
  }
}

module.exports = calculateBullshitScore;
