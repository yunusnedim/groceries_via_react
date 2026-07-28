import React, {useState} from 'react';

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Information(props) {
    if (winner(props.squares)) {
        return <h1>Game Over. Winner: {winner(props.squares)}</h1>;
    } else if (props.xturn) {
        return <h1>Next turn: X</h1>;
    } else {
        return <h1>Next turn: O</h1>;
    }
}

function winner(props) {
    if (props[0] === props[1] && props[1] === props[2]) {
        return props[0];
    } else if (props[3] === props[4] && props[4] === props[5]) {
        return props[3];
    } else if (props[6] === props[7] && props[7] === props[8]) {
        return props[6];
    } else if (props[0] === props[3] && props[3] === props[6]) {
        return props[0];
    } else if (props[1] === props[4] && props[4] === props[7]) {
        return props[1];
    } else if (props[2] === props[5] && props[5] === props[8]) {
        return props[2];
    } else if (props[0] === props[4] && props[4] === props[8]) {
        return props[0];
    } else if (props[2] === props[4] && props[4] === props[6]) {
        return props[2];
    } else {
        return null;
    }
}

function ResetBoard(props) {
    return <button onClick={props.onClick}>Reset Board</button>;
}

function turnsLeft(props) {
    return (
        props.length -
        props.filter((square) => square === 'X' || square === 'O').length
    );
}

export default function Board() {
    function clickHandler(squares, i) {
        const nextSquares = squares.slice();
        if (winner(squares) || turnsLeft(squares) == 0 || squares[i]) {
            return;
        }
        nextSquares[i] = xturn ? 'X' : 'O';

        setSquares(nextSquares);
        setXturn(!xturn);
    }

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xturn, setXturn] = useState(true);

    return (
        <>
            <Information squares={squares} xturn={xturn} />

            <div className='board-row'>
                <Square
                    value={squares[0]}
                    onClick={() => {
                        clickHandler(squares, 0);
                    }}
                />
                <Square
                    value={squares[1]}
                    onClick={() => {
                        clickHandler(squares, 1);
                    }}
                />
                <Square
                    value={squares[2]}
                    onClick={() => {
                        clickHandler(squares, 2);
                    }}
                />
            </div>
            <div className='board-row'>
                <Square
                    value={squares[3]}
                    onClick={() => {
                        clickHandler(squares, 3);
                    }}
                />
                <Square
                    value={squares[4]}
                    onClick={() => {
                        clickHandler(squares, 4);
                    }}
                />
                <Square
                    value={squares[5]}
                    onClick={() => {
                        clickHandler(squares, 5);
                    }}
                />
            </div>
            <div className='board-row'>
                <Square
                    value={squares[6]}
                    onClick={() => {
                        clickHandler(squares, 6);
                    }}
                />
                <Square
                    value={squares[7]}
                    onClick={() => {
                        clickHandler(squares, 7);
                    }}
                />
                <Square
                    value={squares[8]}
                    onClick={() => {
                        clickHandler(squares, 8);
                    }}
                />
            </div>
            <ResetBoard
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setXturn(true);
                }}
            />
        </>
    );
}
