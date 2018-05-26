import React from 'react';
import {Board} from './Board';
import {Tile} from './Tile';
import sudoku from 'sudoku-umd';
import appStyle from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '',
            board: '',
            difficulty: 'easy'
        }
        this.updateTile = this.updateTile.bind(this);
        this.newGame = this.newGame.bind(this);
        this.reset = this.reset.bind(this);
        this.solve = this.solve.bind(this);
        this.check = this.check.bind(this);
        this.movesController = this.movesController.bind(this);
        this.handleDifficulty = this.handleDifficulty.bind(this);
    }
    newGame() {
        let generatedSudoku = sudoku.generate(this.state.difficulty);
        this.setState({
            initialBoard: generatedSudoku,
            board: generatedSudoku,
            reverseIndex: '',
            reverse: []
        });
        
    }
    updateTile(tile, index) {
        let data = Object.assign({}, this.state.board);
        data[index] = tile.target.value;
        let y = Object.keys(data).map(key => data[key]).join('');
       
        this.movesController(tile, index);
        this.setState({
            board: y
        });
    }
    reset() {
        let data = Object.assign({}, this.state.initialBoard);
        let y = Object.keys(data).map(key => data[key]).join('');
        this.setState({
            board: y
        });
    }
    solve() {
        let solve_sudoku = sudoku.solve(this.state.initialBoard);
        this.setState({
            board: solve_sudoku
        });
    }
    check() {
        let solve_sudoku = sudoku.solve(this.state.board) ? 'This sudoku can be solved' : 'This sudoku can not be solved';
        console.log(solve_sudoku);
        alert(solve_sudoku);
    }
    handleDifficulty(e) {
        this.setState({
            difficulty: e.target.value
        });
    }
    movesController(tile, index) {
        let undoMoves = Object.assign({}, this.state.board);
        undoMoves[index] = tile.target.value;
        let temp = Object.values(undoMoves).join('');
        const moves = [temp, ...this.state.reverse];
        this.setState({
            reverse: moves,
            reverseIndex: this.state.reverseIndex = moves.length - 1
        });
    }
    


  render() {
    return (
      	<div className={appStyle.app}>
    		<h1 className={appStyle.Header}>Sudoku</h1>
    		<button onClick = {this.newGame}>New Game</button>
    		<button onClick = {this.check}>Check</button>
			<button onClick = {this.solve}>Solve</button>
			<button onClick = {this.reset}>Reset</button>
        		
      	
			<form>
				<h3>Wybierz poziom gry</h3>
				<input type="radio" value="easy" onChange = { this.handleDifficulty } checked={this.state.difficulty==='easy'} /> Easy
				<input type="radio" value="medium" onChange = { this.handleDifficulty } checked={this.state.difficulty==='medium'} /> Medium
				<input type="radio" value="hard" onChange = { this.handleDifficulty } checked={this.state.difficulty==='hard'} /> Hard
				<input type="radio" value="very-hard" onChange = { this.handleDifficulty } checked={this.state.difficulty==='very-hard'} /> Very Hard
				<input type="radio" value="insane" onChange = { this.handleDifficulty } checked={this.state.difficulty==='insane'} /> Insane
				<input type="radio" value="inhuman" onChange = { this.handleDifficulty } checked={this.state.difficulty==='inhuman'} /> Inhuman
			</form>

			<Board 
      		initialBoard = {this.state.initialBoard}
      		board = {this.state.board} 
      		updateTile = {this.updateTile}
   			/>
      		

    	</div>
    );
  }
}

export default App;
