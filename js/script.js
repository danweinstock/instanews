$(document).ready(function(){
	console.log("ready");
		$('.overlay').hide()
		var optText = $("select").on('change',function(){
			$('.overlay').show()
			$('.landing').removeClass("full-height").addClass("change-height")

			console.log(this.value);
		var url ='http://api.nytimes.com/svc/topstories/v2/'+this.value+'.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
	$.getJSON(url).done(function(news){
		console.log(news.results[0])
		var original = $('.original')
		// console.log(news.results[0]);
		$.each(news.results, function(key,value){
			// console.log(value);
			var abstract = (value.abstract)
			var articleURL = (value.url);
			
			var clone = original.clone();
				// console.log(articleURL)
				// console.log(photoURL);
		if (typeof(value.multimedia[4].url) !== undefined) {
			var photoURL = (value.multimedia[4].url);
			clone.children(".abstract").text(abstract)
			clone.children(".pic").append('<a href= "'+articleURL+'" >  <img src="'+ photoURL +'"> </a>')
		}

			$('.abstract').hide();
			$('.pic').hover(function(){
				$('.abstract').show();
			})
			$('.pic').mouseleave(function(){
				$('.abstract').hide()
			})
			original.remove()
			$('.overlay').append(clone)
		});
	})
		});
});

