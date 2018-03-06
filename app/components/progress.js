import React from 'react';
import './progress.less'

let Progress =React.createClass({
	render(){
		 return (
		 	 <div className="components-progress row">
		 	       {this.props.progress}s
		 	 </div>	
		 );
	}
});

export default Progress;