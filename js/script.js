$(document).ready(function(){
	console.log("ready");
		$('.overlay').hide()
		var optText = $("select").on('change',function(){
			$('.overlay').show()
			$('.landing').removeClass("full-height").addClass("change-height")

			console.log(this.value);
		switch(this.value){
			case 'home':
			var url ='http://api.nytimes.com/svc/topstories/v2/home.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'opinion':
			var url ='http://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'world':
			var url ='http://api.nytimes.com/svc/topstories/v2/world.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'national':
			var url ='http://api.nytimes.com/svc/topstories/v2/national.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'technology':
			var url ='http://api.nytimes.com/svc/topstories/v2/technology.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'science':
			var url ='http://api.nytimes.com/svc/topstories/v2/science.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'health':
			var url ='http://api.nytimes.com/svc/topstories/v2/health.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'sports':
			var url ='http://api.nytimes.com/svc/topstories/v2/sports.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'books':
			var url ='http://api.nytimes.com/svc/topstories/v2/books.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
			case 'movies':
			var url ='http://api.nytimes.com/svc/topstories/v2/movies.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
			break;
		}
	$.getJSON(url).done(function(news){
		console.log(news.results[0])
		var original = $('.original')
		// console.log(news.results[0]);
		$.each(news.results, function(key,value){
			// console.log(value);
			var abstract = (value.abstract)
			var articleURL = (value.url);
			var photoURL = (value.multimedia[4].url);
			var clone = original.clone();
				// console.log(articleURL)
				// console.log(photoURL);
			if (photoURL == undefined){
				return
			}
			clone.children(".abstract").text(abstract)
			clone.children(".pic").append('<a href= "'+articleURL+'" >  <img src="'+ photoURL +'"> </a>')

			$('.abstract').hide();
			$('.pic').hover(function(){
				$('.abstract').show();
			})
			$('.pic').mouseleave(function(){
				$('.abstract').hide()
			})
			$('.original').each(function(i){
				$(this).addClass("item"+(i+1));
			})
			$('.overlay').append(clone)
		});
	})
		});
});