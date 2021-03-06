import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './menuBar';

function Square(props){
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}
  
  class Board extends React.Component {
    /** arrow functions carry the state of the object that defined them, NOT the object that calls them
    * this allows Game to pass the state to Board to pass its state down to Square, the Square and Board become 
    * 'Controlled' components (ie: they don't manage their own state)
    **/
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props){
          super(props)
          this.state ={
              history: [{
                squares: Array(9).fill(null),
              }],
              xIsNext: true,
              stepNumber: 0,
          };
      }
      jumpTo(step) {
          this.setState({
              stepNumber: step,
              xIsNext: (step % 2) === 0,
          });
      }
      handleClick(i) { 
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const squares = history[history.length -1].squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        } 
        squares[i] = this.state.xIsNext ? 'X':'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }
    render() {
        const history = this.state.history;
        const currentState = history[this.state.stepNumber];
        const winner = calculateWinner(currentState.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key = {move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext? 'X':'O');
        }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={currentState.squares}
                onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div className='status'>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
      const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
      ];
      for (let i = 0; i < lines.length; i++){
          const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
      }
      return null;
  }
  
const ddItems = [
  {name: "Tic-Tac-Toe", link: 'https://master.d3kflwv6ppfjft.amplifyapp.com/'},
  {name: "Workouts", link: 'fake'},
  {name: "Family Recipes", link: 'fake'},
  {name: "Dinner Out", link: 'fake'},
  {name: "SwigBook", link: 'fake'},
  {name: "Mock Trader", link: 'fake'},
];
const menuItems = [
  {name: 'Home', address: 'https://www.google.com', active: true},
  {name: 'Help', address: 'https://www.amazon.com', rightAlign: true},
  {name: 'GitHub', address: 'https://github.com/foohooboo/tic-tac-toe'},
  {name: 'LinkedIn', address: 'https://www.linkedin.com/in/daniel-evans-53a2391bb/'},
  {name: 'My Projects', address: null, dropdown: true, dropdownItems: ddItems},
];

  // ========================================
  
  const menuBar = <MenuBar menuItems= {menuItems} />;
  ReactDOM.render(menuBar, document.getElementById('menu-bar'));
  ReactDOM.render(<Game />, document.getElementById('root'));