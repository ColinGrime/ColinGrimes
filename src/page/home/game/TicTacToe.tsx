import { useEffect, useState } from "react";

enum PlayerType {
    Real = "X",
    Computer = "O",
    None = "",
}

export function TicTacToe() {
    const [board, setBoard] = useState<PlayerType[][]>(
        Array(3)
            .fill(0)
            .map(() => Array(3).fill(PlayerType.None))
    );
    const [player, setPlayer] = useState<PlayerType>(PlayerType.Computer);
    const [winner, setWinner] = useState<PlayerType>();

    useEffect(() => {
        if (!canMove(PlayerType.Computer)) {
            return;
        }

        const timeout = setTimeout(() => {
            while (true) {
                const r = Math.floor(Math.random() * 3);
                const c = Math.floor(Math.random() * 3);
                if (attemptMove(PlayerType.Computer, r, c)) {
                    break;
                }
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [player]);

    useEffect(() => {
        if (winner) {
            setPlayer(PlayerType.None);
        }
    }, [winner]);

    /**
     * Checks if the specified cell is taken.
     *
     * @param r the row
     * @param c the column
     * @returns true if the cell is taken
     */
    const isCellTaken = (r: number, c: number) => {
        return board[r][c] !== PlayerType.None;
    };

    /**
     * Checks if the specified player can move.
     * Optional coordinates can be passed to check if they can move at a particular cell.
     *
     * @param mover the player attempting to move
     * @param r the row to check if applicable
     * @param c the column to check if applicable
     * @returns true if the player can move
     */
    const canMove = (mover: PlayerType, r?: number, c?: number) => {
        if (mover !== player || winner) {
            return false;
        } else if (r === undefined || c === undefined) {
            return true;
        } else {
            return !isCellTaken(r, c);
        }
    };

    /**
     * Called when a player wants to attempt a move.
     *
     * @param mover the player attempting to move
     * @param r the row to move to
     * @param c the column to move to
     * @returns true if the move was successful
     */
    const attemptMove = (mover: PlayerType, r: number, c: number) => {
        if (!canMove(mover, r, c)) {
            return false;
        }

        const newBoard = [...board];
        newBoard[r][c] = mover;
        setBoard(newBoard);
        setPlayer(mover === PlayerType.Real ? PlayerType.Computer : PlayerType.Real);
        checkGameState();
        return true;
    };

    /**
     * Checks the state of the game to see if a player has won.
     * The {@link winner} is set to the winning player if applicable.
     */
    const checkGameState = () => {
        for (let i = 0; i < 3; i++) {
            if (isCellTaken(i, 0) && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return setWinner(board[i][0]);
            } else if (isCellTaken(0, i) && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return setWinner(board[0][i]);
            }
        }

        if (isCellTaken(1, 1)) {
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return setWinner(board[0][0]);
            } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return setWinner(board[0][2]);
            }
        }
    };

    /**
     * Resets the entire tic-tac-toe game.
     */
    const resetGame = () => {
        setBoard(
            Array(3)
                .fill(0)
                .map(() => Array(3).fill(PlayerType.None))
        );
        setWinner(undefined);
        setPlayer(PlayerType.Computer);
    };

    return (
        <div className="relative grid h-full w-full grid-cols-3 grid-rows-3">
            {/* Horizontal Lines */}
            <div className="absolute top-1/3 left-0 h-1 w-full bg-cyan-950" />
            <div className="absolute top-2/3 left-0 h-1 w-full bg-cyan-950" />

            {/* Vertical Lines */}
            <div className="absolute top-0 left-1/3 h-full w-1 bg-cyan-950" />
            <div className="absolute top-0 left-2/3 h-full w-1 bg-cyan-950" />

            {board.map((row, r) =>
                row.map((cell, c) => (
                    <button
                        key={`${r}-${c}`}
                        onClick={() => attemptMove(PlayerType.Real, r, c)}
                        className={`flex items-center justify-center text-4xl font-bold ${canMove(PlayerType.Real, r, c) && "hover:cursor-pointer"}`}
                    >
                        {cell}
                    </button>
                ))
            )}

            {winner && (
                <div className="absolute inset-0 m-auto flex h-22 w-33 flex-col items-center justify-center gap-1 rounded-2xl bg-cyan-900">
                    <div className={`text-2xl font-bold ${winner === PlayerType.Real ? "text-green-500" : "text-red-500"}`}>
                        You {winner === PlayerType.Real ? "won" : "lost"}!
                    </div>
                    <button onClick={() => resetGame()} className="text-lg font-semibold hover:cursor-pointer">
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
}
