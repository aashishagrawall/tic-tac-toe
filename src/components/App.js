import React, { Component } from 'react';
import { GameContainer } from './GameContainer';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
    
				<div className='main-container'>
					<div className="game-heading">tic-tac-toe</div>
					<div className="game-box">
						<GameContainer hello="asda">asdad</GameContainer>
					</div>
				</div>
			
		
    );
  }
}

export default App;
