import React from 'react';

 class ResetButton extends React.Component{
	
	render(){
		return (
			<div className="reset-btn " onClick={this.props.onClick} >

				&#174; Reset all

			</div>

			);
	}
}
export default ResetButton;
