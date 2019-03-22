import React from 'react';
 import TurnDisplayer from './TurnDisplayer';
 import ScoreBoard from './ScoreBoard';
 import Board from './Board';
 import  Result  from './Result';
 import  ResetButton  from './ResetButton';


class Game extends React.Component{
	
	render(){

		var resultDivJSX , 
			scoreBoardJSX,
			turnDisplayerJSX,
			resetBtnJSX;

		scoreBoardJSX = (
			<ScoreBoard 
				playerScore={this.props.playerScore}
				computerScore={this.props.computerScore}
			/>
			);

		
		resetBtnJSX = (
			<ResetButton
				onClick={this.props.handleResetClick}
			/>
			);

		

		if(this.props.isFinished===true){
			
			resultDivJSX = (
			<Result
				isTied = {this.props.isTied}
				winner = {this.props.winner}
				startNewGame={this.props.startNewGame}
			
			/>
			);

			return (
				<div className="game-box-inner">
					{resetBtnJSX}
					{resultDivJSX}
					{scoreBoardJSX}
					<Board 
						isFinished={true}
						isTied={this.props.isTied}
						winSquares={this.props.winSquares}
						square={this.props.square} 
					/>
					
				</div>
				);
		}else{
			turnDisplayerJSX = (
				<TurnDisplayer
					currentPlayer = {this.props.currentPlayer}
				
				/>
				);

			return (
				<div className="game-box-inner">
					{resetBtnJSX}
					{scoreBoardJSX}
					<Board 
						square={this.props.square} 
						onClick={this.props.onSquareClick}
						isAICalculating={this.props.isAICalculating}
					/>
					{turnDisplayerJSX}
				</div>
				);
		}
	}
}
export default Game;

// Game.propTypes = {
// 	square : React.PropTypes.array,
// 	onClick : React.PropTypes.func
// }