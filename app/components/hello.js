import React from 'react';
import './hello.less'

let Hello =React.createClass({
	render(){
		 return (
                <div className="hello-compoment">
                   Hello，world，React and webpack!
                </div>
		 	);
	}
});

export default Hello;