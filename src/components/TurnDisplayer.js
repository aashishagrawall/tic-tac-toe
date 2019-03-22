import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class TurnDisplayer extends React.Component{
	
	

	constructor(props){
		super(props); 
		

		this.state={
			animClass : ""
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(this.props.currentPlayer !==nextProps.currentPlayer){
			this.setState({
				animClass : 'slide-me-up-down'
			});
			clearInterval(this.hello);
		}
		
	}


	componentDidUpdate(){
		this.hello =  setTimeout(function(){
			if(this.state.animClass!==""){
				this.setState({
					animClass : ''
				});
			}
			
		}.bind(this),700);
	}

	

	render(){
		

		var displayTurn ;
		if( this.props.currentPlayer === "computer"){
			displayTurn = "Computer's turn ";
		}

		if( this.props.currentPlayer === "player"){
			displayTurn = "Your's turn ";
		}

		

		return (

			
			
			<div className={'turn-displayer '+this.state.animClass}>
			{displayTurn}
			</div>
			


			
			);
	}
}
export default TurnDisplayer;

/*{<ReactCSSTransitionGroup
			transitionName="slide"
			transitionAppear={true}
			transitionAppearTimeout={700}
			transitionEnterTimeout={700}
			transitionLeaveTimeout={700}
			>}

			/*</ReactCSSTransitionGroup>*/

// TurnDisplayer.propTypes = {
// 	displayTurn : React.PropTypes.string
// }