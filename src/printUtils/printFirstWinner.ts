import { FirstWinner } from "../isWinner";

export default (relativePath: string, firstWinner: FirstWinner): void => { 
    
    console.log(`The first winner of the game at ${relativePath} is card number ${firstWinner.index}.\nYou will win in ${firstWinner.gameDuration} turns with the card:\n\n${firstWinner.card.map((row) => {
        return `${row.join(' ')}\n`
    }).join('')}`);
}