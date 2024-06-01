import Sentiment from "sentiment";

const sentiment = new Sentiment();

/**
 * Function to categorize sentiment based on score
 * @param {number} score - The sentiment score
 * @returns {string} - The overall sentiment ("positive", "negative", or "neutral")
 */
function determineSentiment(score: number): string {
	const positiveThreshold = 1;
	const negativeThreshold = -1;

	if (score >= positiveThreshold) {
		return "positive";
	} else if (score <= negativeThreshold) {
		return "negative";
	} else {
		return "neutral";
	}
}

const text = "do you care if people copy you?";
const result = sentiment.analyze(text);
const overallSentiment = determineSentiment(result.score);

console.log(`Text: "${text}"`);
console.log(`Sentiment Score: ${result.score}`);
console.log(`Overall Sentiment: ${overallSentiment}`);
