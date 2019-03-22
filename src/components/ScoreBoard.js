import React from 'react';

class ScoreBoard extends React.Component{
	
	render(){
		

		

		return (
			<div className="score-board">
				<div className = 'score-div first-score'>
					<div> Player's </div>
					<div className="score-num"> {this.props.playerScore} </div>
				</div>
				<div className = 'score-div second-score'>
					<div> computer's </div>
					<div className="score-num"> {this.props.computerScore} </div>
				</div>
			</div>
		);
	}
}

export default ScoreBoard;
// ScoreBoard.propTypes = {
// 	isTwoPlayer : React.PropTypes.bool,
// 	firstPlayerScore : React.PropTypes.number,
// 	secondPlayerScore : React.PropTypes.number
// }