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
    const [player, setPlayer] = useState<PlayerType>(Math.random() > 0.5 ? PlayerType.Real : PlayerType.Computer);
    const [winner, setWinner] = useState<PlayerType>();

    useEffect(() => {
        if (player !== PlayerType.Computer || winner) {
            return;
        }

        const timeout = setTimeout(() => {
            while (true) {
                const r = Math.floor(Math.random() * 3);
                const c = Math.floor(Math.random() * 3);
                if (attemptMove(r, c, PlayerType.Computer)) {
                    break;
                }
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [player]);

    const isCellTaken = (r: number, c: number) => {
        return board[r][c] !== PlayerType.None;
    };

    const attemptMove = (r: number, c: number, mover: PlayerType) => {
        if (mover !== player || isCellTaken(r, c) || winner) {
            return false;
        }

        const newBoard = [...board];
        newBoard[r][c] = mover;
        setBoard(newBoard);
        setPlayer(mover === PlayerType.Real ? PlayerType.Computer : PlayerType.Real);
        checkGameState();
        return true;
    };

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
                        onClick={() => attemptMove(r, c, PlayerType.Real)}
                        className={`flex items-center justify-center text-4xl font-bold ${cell === PlayerType.None && player === PlayerType.Real && !winner && "hover:cursor-pointer"}`}
                    >
                        {cell}
                    </button>
                ))
            )}
        </div>
    );
}
