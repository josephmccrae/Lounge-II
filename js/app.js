$(document).ready(function(){
    
    $('.heroSelect').on('click',function(){
        $('.results').html('');
        var selection = $(this).attr('id');
        console.log(selection);
        
        getInfo(selection);
    });
});


var showHero = function(characters) {
	var result = $('.hidden .hero').clone();
    
    var alias = result.find('.name');
	alias.text(characters);

	return result;
};


var getInfo = function(selection){
        
    var result = $.ajax({
        url: "http://www.comicvine.com/api/characters/?api_key=145adb79c062d3d1ce533699ca10282a963deede&filter=name:" + selection,
        dataType: "jsonp",
        type: "GET",
    })
    
        var superHero = showHero();
        $('.results').append(superHero);
        
        var data = { "firstName": "Joe" };
        alert(data.firstName);
};
            

