import React from 'react';
import Tile from './Tile';
import grid from './Board.css';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.displayTile = this.displayTile.bind(this);
	}
	handleChange(tile, index){
		this.props.updateTile(tile,index);
	}

	displayTile() {
		let arr = this.props.board.split('');
		return arr.map((e,i) => {
			if(e.match(/\d/g)){
				return(<Tile val = {e} index = {i} onClick = {(e)=>this.handleChange(e,i)} key={i} isDisabled = {this.props.initialBoard}/>)
			}else {
			let noDot = '';
			 	return(<Tile val = {noDot} onClick = {(noDot)=>this.handleChange(noDot,i)} key={i} isDisabled = {this.props.initialBoard} />)
			}
		});
	}
	render() {
		return(
			<div className={grid.gridContainer}>
				{this.displayTile()}
			</div>
		);
	}
}























