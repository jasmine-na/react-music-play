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
          	    	 	mp3:'http://fs.w.kugou.com/201803071922/a9f3686fd8599af03c11d1a9304181aa/G022/M03/10/1D/toYBAFWBvxWAUSxxAELMwt_tRxs509.mp3'
          	    	 }).jPlayer('play');
          	    },
          	    supplied:'mp3',
          	    wmode:'window'
          });
          $('#player').bind($.jPlayer.event.timeupdate, function(event) { 
          	    
          });
          
    },
    render(){
        return(
	        	<div>
                   <Header />
                   <Progress progress="1">
                   </Progress>
	        	</div>
            );
        
   }
})
export default Root;


