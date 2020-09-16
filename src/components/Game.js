import React from 'react';
import Board from './Board.js';
import Square from './Square';
// import ReactDOM from "react-dom"; //" ReactDom instance call to populate the DOM"
import "../index.css"; //"the styling"

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
  //.slice makes a shallow clone of an array
    const history = this.state.history.slice(0,this.state.stepNumber + 1); //ensures that if we “go back in time” and then make a new move from that point/we throw away all the “future” history that would now become incorrect 
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length, //reflects the move displayed to the user now.  
      xIsNext: !this.state.xIsNext,
    });
  }
//since 'X;' is always first, we set xIsNext to true if the number that we’re changing stepNumber to is even
  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

// .map() over history in the <Game render method)
render() {
    const history = this.state.history;
      //since 'X;' is always first, we set xIsNext to true if the number ≈that we’re changing stepNumber to is even
    const current = history[this.state.stepNumber];//to rendering the currently selected move according to stepNumber
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
       
          <li key={ move }> 
          
              <div class="ui animated button" tabindex="0">
          
              <div class="visible content"></div> <button onClick={() => this.jumpTo(move)}>{desc}</button> </div>
              <div class="hidden content">
              <i class="right arrow icon"></i>
              </div>
            
            </li>
    
        
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

//helper fxn() to show when game is won/no more turns 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //if sq(a) (entered to have an 'a' [who isn't nulled] to compare to an incoming 'a' in Game's render return  )
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}