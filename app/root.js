import React from 'react';
import Header from './components/header';
import Progress from './components/Progress'
let Root=React.createClass({
    getInitialState(){
          return {
          	 progress:'-'
          }
    },
    componentDidMount(){
          $('#player').jPlayer({
          	    ready:function () {
          	    	 $(this).jPlayer('setMedia',{
          	    	 	mp3:'http://f1.htqyy.com/play7/133/mp3/3'
          	    	 }).jPlayer('play');
          	    },
          	    supplied:'mp3',
          	    wmode:'window'
          });
          var that=this;
          $('#player').bind($.jPlayer.event.timeupdate, function(event) {
                console.log(Math.round(event.jPlayer.status.currentTime))
          	    that.setState({
          	    	progress: Math.round(event.jPlayer.status.currentTime)
          	    });
          });
          
    },
    componentWillUnMount(){
          $('#player').unbind($.jPlayer.event.timeupdate);
    },
    render(){
        return(
	        	<div>
                   <Header />
                   <div id="player"></div>
                   <Progress progress={this.state.progress}>
                   </Progress>
	        	</div>
            );
        
   }
})
export default Root;


