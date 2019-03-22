import React from 'react';

 class Square extends React.Component{

	oninnerSquareCLick=()=>{
		if(this.props.isFilled)
		alert("already filled");
		else
        this.props.onClick() ;


	}
	
	render(){
		return (
			<div className={'square '+( this.props.isFilled ? 'filled ' : '' )+( this.props.isWinSquare ? 'win-square ' : '' ) } onClick={this.oninnerSquareCLick.bind(this)} >

				<div className='square-inner' >
				{this.props.value}
				</div>

			</div>

			);
	}
}

// Square.propTypes = {
// 	onClick : React.PropTypes.func.isRequired,
// 	key : React.PropTypes.string.isRequired,
// 	value : React.PropTypes.string.isRequired
// }

export default Square ;