import { FinishedGameState } from "../../model/game";

export default (index: number, isWinner: boolean): void => {
    console.log(`Card ${index + 1} is a ${isWinner ? 'winner congratulations!' : 'not a winner booo!'}`)
}