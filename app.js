$('Document').ready(function() {
	function search() {
		$.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=derrickrose&key=AIzaSyBcN2ThZ4YKobSTSIUB9a07Api-WGa_4B0', function(data){
	    	myData = data.Search;
	    	display(data.items);
	    	console.log(data.items);
		});
	}

	function display(videos) {
		$.each(videos, function(index, video) {
			console.log(video.snippet.thumbnails.medium.url);
			$('#search-list').append('<li><img src="' + video.snippet.thumbnails.medium.url + '" /><br><p>' + video.snippet.title + '</p></li>');
		});
	}


	search();

	// function displaySearchResults(videos) {
	// 	var html = "";
	// 	$.each(videos, function (index, video) {
	// 		// append li to ul
	// 		console.log(video.snippet.thumbnails.medium.url);
	// 		html = html + "<li><p>" + video.snippet.title +
	// 			"</p><img src='" +  video.snippet.thumbnails.high.url + "'/></li>" ;

	// 	});

	// function getResults(query) {
	// 	$.getJSON("https://www.googleapis.com/youtube/v3/search", {
	// 		"part": "snippet",
	// 		"key": "AIzaSyBcN2ThZ4YKobSTSIUB9a07Api-WGa_4B0",
	// 		"q": query
	// 	});
	// }

	// $('#search-button').submit(function(event) {
	// 	event.preventDefault();
	// 	console.log(getResults('Joe'));
	// })
	
});