	const motherFunction = (function(news){
		let original = $('.original')
		const getInfo = function(key,value){
			let abstract = (value.abstract)
			let articleURL = (value.url);	
			let clone = original.clone();
		if (typeof(value.multimedia[0]) != undefined && value.multimedia.length != 0) {
			let photoURL = (value.multimedia[4].url);
			clone.children(".abstract").text(abstract)
			clone.children(".pic").append(`<a href= "${articleURL}" ><img src="${photoURL}"> </a>`)
		}
		else{
			return;
		} 
			
			original.remove()
			let i = 0;
			$('.original').each(function(i){
				$(this).attr('id',"item" +(i+1));
			})
	
			if($('.original').length < 12){
				$('.overlay').append(clone)	
			}
		
		}
		$.each(news.results, getInfo);
	})