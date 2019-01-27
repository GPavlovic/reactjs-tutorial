import React from 'react';

import { Square } from './square.component';

export class Board extends React.Component
{
    renderSquare(i)
    {
        return (
            <Square
                value={ this.props.squares[i] }
                onClick={ () => this.props.onClick(i) }
            />
        );
    }

    render()
    {
        return (
            <div>
                <div className="board-row">
                    <div className="xLabels"></div>
                    <div className="xLabels"><span>0</span></div>
                    <div className="xLabels"><span>1</span></div>
                    <div className="xLabels"><span>2</span></div>
                </div>
                <div className="board-row">
                    <div className="yLabels"><span>0</span></div>
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    <div className="yLabels"><span>1</span></div>
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    <div className="yLabels"><span>2</span></div>
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}