import formatFileContents from "./formatFileContents";
import readFile from "./readFile";
import isWinner from "./isWinner";
import { StandardBingoCard } from "../model/card";

function deduceWinnersFromFile(relativePath: string) {
    const fileContents = readFile(relativePath)
    const formattedData = formatFileContents(fileContents);
    formattedData.cards.map((card: StandardBingoCard, index: number) => 
        console.log(`Card ${index + 1} is a ${isWinner(card, formattedData.winningNumbers) ? 'winner congratulations!' : 'not a winner booo!'}`)
    )
}

deduceWinnersFromFile('files/input.txt');
