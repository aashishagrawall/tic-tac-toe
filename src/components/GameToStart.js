import React from 'react';

 class GameToStart extends React.Component{
	
	render(){
		return (
			
			<div className={'select-div game-to-start'} >
				<h3>Your Randomized Symbol</h3>
				<div 
			
			
				> 
				Player Symbol : 	{this.props.playerSymbol}
				</div>
				<div 
				>
               Computer Symbol :  {this.props.computerSymbol}
					
				</div>
				<div 
				>
               Player who gets <strong>O</strong> starts the game
					
				</div>
				<button className="game-btn" onClick={this.props.startGame}>Start</button>

			</div>

			);
	}
}


// SelectGameType.propTypes = {
// 	handleGameTypeSelect : React.PropTypes.func.isRequired
// }

export default GameToStart;