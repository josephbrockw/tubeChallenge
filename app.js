

var OAUTH_CLIENT_ID = "226131946239-nq6mblmf2e2g6oo9470rs2e9q1gqek5o.apps.googleusercontent.com"

var OAUTH_SCOPE = ['http://www.googleapis.com/auth/yt-analytics.readonly', 
					'http://www.googleapis.com/auth/youtube.readonly', 
					'http://www.googleapis.com/auth/yt_analytics-monetary.readonly',];

var channelID 

window.onJSClientLoad = function(){
	gapi.auth.init(function(){
		window.setTimeout(checkAuth, 1);
	});
};

function checkAuth() {
	gapi.auth.authorize({
		client_id : OAUTH_CLIENT_ID,
		scope: OAUTH_SCOPE,
		immediate : true
	}, handleAuthResult);		
}

function handleAuthResult(authResult) {
	if(authResult){
		$('.pre-auth').hide();
		$('post-auth').show();
		loadAPI();
	}else {
		$('.pre-auth').show();
		$('post-auth').hide();
		$('#login-link').click(function() {
			gapi.auth.authorize({
				client_id : OAUTH_CLIENT_ID,
				scope: OAUTH_SCOPE,
				immediate : false
			}, handleAuthResult);
		});
	}
}

function loadAPI() {
	gapi.clent.load('youtube', 'v3', function(){
		gapi.client.load('youtubeAnalytics', 'v1', function() {
			getUserChannel();
		});
	});
}

function getUserChannel() {
	var request = gapi.client.youtube.channel.list({
		mine: true,
		part: 'id,contentDetails'
	});
	request.execute(function(response){
		if('error' in response){
			displayMessage(response.error.message);
		} else {
			channelId = response.items[0].id;
			displaychannelID(channelId);
		}
	});
}

function displaychannelID(channel) {
	alert(channel);
}