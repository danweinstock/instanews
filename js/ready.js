function onReady(){
	console.log("ready");
		$('.overlay').hide()
		$('select').on('change',function(){
			$('.overlay').show()
			$('.landing').removeClass("full-height").addClass("change-height")
			console.log(this.value);
		let url =`https://api.nytimes.com/svc/topstories/v2/${this.value}.json?api-key=b1366b81c4e6416d9dcc93e5b4687481`;
	$.getJSON(url).done(motherFunction);
		});	
}