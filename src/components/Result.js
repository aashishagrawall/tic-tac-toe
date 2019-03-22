import React from 'react';

 class Result extends React.Component{
	
	render(){
		
		var msg;
	
	
			if(this.props.winner==='player')
				msg = 'You Won';
			else
				msg = "Computer Won";

		if(this.props.isTied){
			msg = "It's a tie ;) ";
		}

		return (
			<div>
				<div className="result-div">
					{msg}
				</div>
				
				<div className="result-div-background">
				<button onClick={this.props.startNewGame}> Start new game </button>
				</div>
			</div>
				
		);
	}
}
export default Result;
