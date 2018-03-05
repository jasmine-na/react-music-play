import React from 'react';
import './index.less'
import {render} from 'react-dom'
import Hello from './components/hello'
console.log(React.version);
render(
	<Hello></Hello>,
     document.getElementById('root')
     )