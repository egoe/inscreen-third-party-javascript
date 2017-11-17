var iframe ;
var src;
var inscreen = {
    initPlayer: function(ifrmaeId) {
    iframe = document.getElementById(ifrmaeId).contentWindow;
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
        var result ;
        if(e.data.duration){
          result = e.data.duration;
          console.log('duration',e.data.duration);
        }
        else if(e.data.CurrentTime){
          result = e.data.CurrentTime;
         console.log('CurrentTime',e.data.CurrentTime); 
        }
        else if(e.data.Provider){
          result = e.data.Provider;
         console.log('Provider',e.data.Provider); 
        }
        else if(e.data.VideoId){
          result = e.data.VideoId;
         console.log('VideoId',e.data.VideoId); 
        }
        else if(e.data.VideoTitle){
          result = e.data.VideoTitle;
         console.log('VideoTitle',e.data.VideoTitle); 
        }
        else if(e.data.DirectUrl){
          result = e.data.DirectUrl;
         console.log('DirectUrl',e.data.DirectUrl); 
        }
        else if(e.data.EmbedUrl){
          result = e.data.EmbedUrl;
         console.log('EmbedUrl',e.data.EmbedUrl); 
        }
        $('#res').val(result);
        return result;
    },false);
      	src = document.getElementById(ifrmaeId).src;
      	/*$('.btn').on('click',function(){
      		var type = $(this).attr('data-btn');
      		var message = {};
      		message.type = type;
      		console.log(message);
      		console.log('blog.local:  sending message:  ' + message);
      		iframe.postMessage(message,'http://localhost:9000/');
    	})*/
    },
    play: function(){
    	console.log(iframe)
    	var message = {};
      	message.type = "Play";
      	iframe.postMessage(message,src);
    },
    pause: function(){
    	var message = {};
      	message.type = "Pause";
      	iframe.postMessage(message,src);
    },/*
    mute: function(address){
    //function code
    }*/
    Duration: function(){
    	var message = {};
      	message.type = "Duration";
      	return iframe.postMessage(message,src);
    },
    CurrentTime: function(address){
    	var message = {};
      	message.type = "CurrentTime";
      	iframe.postMessage(message,src);
    },
    Provider: function(address){
    	var message = {};
      	message.type = "Provider";
      	iframe.postMessage(message,src);
    },
    EmbedUrl: function(address){
    	var message = {};
      	message.type = "EmbedUrl";
      	iframe.postMessage(message,src);
    },
    DirectUrl: function(address){
    	var message = {};
      	message.type = "Duration";
      	iframe.postMessage(message,src);
    },
    VideoId: function(address){
    	var message = {};
      	message.type = "VideoId";
      	iframe.postMessage(message,src);
    },
    VideoTitle: function(address){
    	var message = {};
      	message.type = "VideoTitle";
      	iframe.postMessage(message,src);
    },
}