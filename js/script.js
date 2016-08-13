$(document).ready(function(){
	console.log("ready");
	var optText = $("select").on('change',function(){
		console.log(this.value);
		if (this.value == 'home'){
			var url ='http://api.nytimes.com/svc/topstories/v2/home.json?api-key=b1366b81c4e6416d9dcc93e5b4687481';
		}
		else if (this.value == "opinion"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value == "world"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/world.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="national"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/national.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="technology"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/technology.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="science"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/science.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="health"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/health.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="sports"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/sports.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="books"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/books.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}
		else if (this.value =="movies"){
			var url = 'http://api.nytimes.com/svc/topstories/v2/movies.json?api-key=b1366b81c4e6416d9dcc93e5b4687481'
		}

	$.getJSON(url).done(function(news){
		console.log(news.results[0])
		var original = $('.original')
		console.log(news.results[0]);
		$.each(news.results, function(key,value){
			console.log(value);
			var abstract = (value.abstract)
			var articleURL = (value.url);
			var photoURL = (value.multimedia[4].url);
			var clone = original.clone();
				console.log(articleURL)
				console.log(photoURL);
		
	
			if (photoURL == undefined){
				return
			}
			else{
				console.log("Hurray")
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
			$('.original:empty').remove();
			$('.overlay').append(clone)
		});
	})
	});

});