import React , { Component }from 'react';
import  Square  from './Square';
import AIcalculationPanel from './AIcalculationPanel';

 class Board extends Component{
	clickSquare=(i,j)=>{
		console.log(i,j);

		this.props.onClick(i,j);


	}
	
	getSingleRowJSX(i){

		var squareJSX,
		rowArr=[];

		for(var j=0;j<3;j++){

			//if game is finished render without click 
			if(this.props.isFinished){
				if(this.props.isTied){
					squareJSX = (
						<Square 
						isFilled={ this.props.square[i][j] ? true : false}
						key = {i+"-"+j}
						value={this.props.square[i][j]} 					
						/>
						);
				}else{
					//win
					squareJSX = (
						<Square 
						isWinSquare={ this.props.winSquares.indexOf(i+'-'+j)!==-1 ? true : false }
						isFilled={ this.props.square[i][j] ? true : false}
						key = {i+"-"+j}
						value={this.props.square[i][j]} 					
						/>
						);
				}
			}else{
					squareJSX = (
						<Square 
						isFilled={ this.props.square[i][j] ? true : false}
						key = {i+"-"+j}
						value={this.props.square[i][j]} 
						onClick={this.clickSquare.bind(this,i,j)} 
						/>
						);
				
			}
			rowArr.push(squareJSX);
		}

		return rowArr;
	}

	getBoardJSX(){
		console.log("here");

		var boardRowArr = [],
		boardRowJSX;

		for(var i=0;i<3;i++){						
			boardRowJSX = (
				<div className='board-row' key={i}>
				{this.getSingleRowJSX(i)}
				</div> 
				);
			boardRowArr.push(boardRowJSX)
		}
		return boardRowArr;
	}
	

	render(){
		let isAICalculatingPanel=(
			<AIcalculationPanel />
			);;
		if(this.props.isAICalculating){
		
			return (
				<div className="board-wrapper">
				<div className="board">
				{isAICalculatingPanel}
	
				{this.getBoardJSX()}
				</div>
				</div>
				);

		}else{
			return(<div className="board-wrapper">
				<div className="board">
				
				{this.getBoardJSX()}
				</div>
				</div>);

		}

		
	}
}

export default Board;