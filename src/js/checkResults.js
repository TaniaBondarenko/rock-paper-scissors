import { userScore, itemScore, resultsContent } from './app';
export default function checkResult() {
    userScore > itemScore
        ? resultsContent.innerHTML = `You won ${userScore}:${itemScore}`
        : resultsContent.innerHTML = `Computer won ${itemScore}:${userScore}`;
}