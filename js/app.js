$(document).ready(function(){
    
    $('.heroSelect').on('click',function(){
        getInfo();
    });
});

    
    var showHero = function(characters) {
	
        // clone our result template code
        var result = $('.hidden .hero').clone();

        // Set the question properties in result
        var heroElem = result.find('.name');
        heroElem.text(characters.name);

        return result;
    };



    var getInfo = function(){

        var result = $.ajax({
            url: "http://www.comicvine.com/api/characters/?api_key=145adb79c062d3d1ce533699ca10282a963deede",
            dataType: "jsonp",
            type: "GET",
            });
        
        
        .done(function(result){
		$.each(result.items, function(i, item) {
			var final = showHero(item);
			$('.results').append(final);
		});
	   })
    };




