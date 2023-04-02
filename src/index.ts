import formatFileContents from "./formatFileContents";
import readFile from "./readFile";
import isWinner from "./isWinner";
import { StandardBingoCard } from "../model/card";

const fileContents = readFile('files/input.txt')
const formattedData = formatFileContents(fileContents);
formattedData.cards.map((card: StandardBingoCard, index: number) => 
    console.log(`Card ${index + 1} is a ${isWinner(card, formattedData.winningNumbers) ? 'winner congratulations!' : 'not a winner booo!'}`)
)

