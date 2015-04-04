function handleAPILoaded() {
	$('#search-button').attr('disabled', false);
}

function search() {
	var q = $('#query').val();
	var request = gapi.clent.youtube.search.list({
		q: q,
		part: 'snippet'
	});

	request.execute(function(response) {
		var str = JSON.stringify(response.result);
		$('#search-container').html('<pre>' + str + '</pre>');
	});
}