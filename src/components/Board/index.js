import React from 'react';
import Square from '../Square'

function Board({ squares, onClick }) {
    const style = {
        border: '0.3rem solid',
        borderRadius: '10px',
        width: '17rem',
        height: '17rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    }
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board