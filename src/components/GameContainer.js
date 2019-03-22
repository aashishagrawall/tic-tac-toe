import React from 'react';
 import Game from './Game';
 import GameToStart  from './GameToStart';
 import { calculateNextMove } from '../helpers/nextMove';
import { calculateWinner } from '../helpers/resultCalc';
import '../helpers/protoTypeMethods';

export class GameContainer extends React.Component{

    constructor(props) {
		super(props);
		this.state={
			square : [[null,null,null],[null,null,null],[null,null,null]],
			currentSymbol : "",
			gameState : "",
			isFinished : false,
			isTied : false,
			playerSymbol : "",
			computerSymbol : "",
			playerScore : 0,
			computerScore : 0,
	        currentPlayer : '',
			winner : '',
			winSquares : null,
			isAICalculating : false

        };
       this.handleSquareClick = this.handleSquareClick.bind(this);
	
		//this.handleResetClick = this.handleResetClick.bind(this);
		this.startNewGame=this.startNewGame.bind(this);

		console.log(props,this.state);
		
    }
    /*
	*Restart game
	*/
	startNewGame(){
	
			this.setState({
				square : [[null,null,null],[null,null,null],[null,null,null]],
				gameState : "game-to-start",
				isFinished : false,
				isTied : false,
				winner : '',
				winSquares : null,
				isAICalculating : false
			});

	
	}
    /*
	*Function to play computers part
	*/
	playComputerPart(){
		var square,
		result,
		nextMove;
		
		square = this.state.square.clone2DArray();
		
		nextMove = calculateNextMove(square , this.state.computerSymbol );
		

		square[nextMove[0]][nextMove[1]] =  this.state.currentSymbol;
		result = calculateWinner(square);
		//console.log('c',result);

		//if game is tied return
		if(result.isFinished && result.isTied){
			this.setState({
				square :square,
				isTied : true,
				isFinished : true
			});

		
			return;
		}

		if(result.isFinished){
			this.handleGameFinish(square , result );
		}else{
			this.setState({
				isAICalculating : false,
				square : square,
				currentSymbol : (this.state.currentSymbol==="X") ? "O" : "X",
				currentPlayer : this.state.currentPlayer === "player" ? "computer" : "player"
			});

		}
    }
    
    /*
	*Function to handle game finish
	*/
	handleGameFinish(square , result ){
		this.setState({
			gameState : "finished",
			isFinished : true,
			winner : this.findWinner(result.winSymbol),
			playerScore : this.findWinner(result.winSymbol)==='player' ? this.state.playerScore + 1 : this.state.playerScore,
			computerScore : this.findWinner(result.winSymbol)==='computer' ? this.state.computerScore + 1 : this.state.computerScore,
			square : square,
			winSquares : result.winSquares
		});

	//	this.startNewGame();
    }
    
    findWinner(symbol){
		if(this.state.playerSymbol===symbol){
			return 'player';
		}
		else{
			return 'computer';
		}
	}


    	/*
	* Handle click on square
	*/
	handleSquareClick(i,j){
        //console.log(i,j);
		var square,
		result;
		square = this.state.square.clone2DArray();

		if(square[i][j]){  //if already filled no need reassign it
			return ;
		}

		square[i][j] =  this.state.currentSymbol;

		result = calculateWinner(square);
		
		//if game is tied return
		if(result.isFinished && result.isTied){
			this.setState({
				square : square,
				isTied : true,
				isFinished : true
			});

		//	this.startNewGame();
			return;
		}
		
		if(result.isFinished){

			this.handleGameFinish(square , result );

		}else{
			this.setState({
				square : square,
				currentSymbol : (this.state.currentSymbol==="X") ? "O" : "X",
				currentPlayer : this.state.currentPlayer === "player" ? "computer" : "player",
				isAICalculating :  true
			});

			setTimeout(function(){
				this.playComputerPart();
			}.bind(this) , 200);

		}
		
	}


    startGame=()=>{
      const player=this.state.playerSymbol==='O' ? 'player':'computer'
      //console.log(player);
      if(player==='player'){
        this.setState({
			gameState : "game-is-on",
			currentPlayer : player,
			currentSymbol : player==='player' ? this.state.playerSymbol : this.state.computerSymbol
		});

      }else {
        this.setState({
            gameState : "game-is-on",
			currentPlayer : player,
			currentSymbol : player==='player' ? this.state.playerSymbol : this.state.computerSymbol,
            isAICalculating :  true
		}) 
		setTimeout(function(){
			this.playComputerPart();
		}.bind(this) , 200);
	  }
	
    

	}
	

	

    componentWillMount(){
        let random =Math.random();
            if(random<.5){
                this.setState({
                    gameState : "game-to-start",
                    playerSymbol : "X",
                    computerSymbol : "O",
                });

            }else{
                this.setState({
                    gameState : "game-to-start",
                    playerSymbol : "O",
                    computerSymbol : "X",
                });

            }

    }

    

	
	
	



	render(){
        var displayedComponent;
        if(this.state.gameState==="game-to-start"){

			displayedComponent = (				
				<GameToStart
                playerSymbol={this.state.playerSymbol}
                computerSymbol={this.state.computerSymbol}
                startGame={this.startGame.bind(this)}
				key = "game-to-start"
				/>
				);

		}else if(this.state.gameState==="game-is-on"||this.state.gameState==="finished"){
			
			displayedComponent = ( 
				<Game 
				playerScore={this.state.playerScore}
				computerScore={this.state.computerScore}
				isFinished={this.state.isFinished}
				isTied={this.state.isTied}
				winSquares={this.state.winSquares}
				winner={this.state.winner}
				square={this.state.square}
				onSquareClick={this.handleSquareClick.bind(this)}
				startNewGame={this.startNewGame}
				
				currentPlayer={this.state.currentPlayer}
				isAICalculating={this.state.isAICalculating}
				handleResetClick={this.handleResetClick}
				/>
				);
		}
		//console.log('main-render');
		return (
			<div>

			{displayedComponent}

			</div>

			);
	}
}

// <ReactCSSTransitionGroup
// 					transitionName="fade"
// 					transitionAppear={true}
// 					transitionAppearTimeout={700}
// 					transitionEnterTimeout={700}
// 					transitionLeaveTimeout={700}
// 				>
// 				</ReactCSSTransitionGroup>