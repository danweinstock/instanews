$(document).ready(function(){
	console.log("ready");
	var url = 'http://api.nytimes.com/svc/topstories/v2/technology.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
	$.getJSON(url).done(function(news){
		console.log(news.results[0]);
	})

});