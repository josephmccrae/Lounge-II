$(document).ready(function(){
    
    $('.heroSelect').on('click',function(){
        getInfo(name);
    });
});

    var showHero = function(characters) {
	
	// clone our result template code
	var result = $('.hidden .hero').clone();
	
	// set some properties related to asker
	var hero = result.find('.name');
    hero.text(characters.name);
        
	return result;
};
    

    var getInfo = function(name){

        var result = $.ajax({
            url: "http://www.comicvine.com/api/characters/?api_key=145adb79c062d3d1ce533699ca10282a963deede&filter=name:Batman",
            dataType: "jsonp",
            type: "GET",
            })
        
        .done(function(result){
           $('.results').append(name);
        });
    };
            






