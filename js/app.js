$(document).ready(function(){
    $('.heroSelect').on('click',function(){
        // clear out results from previous searches
        $('.results').html('');
        //get value of selected button
        var selection = $(this).attr('value');
        console.log(selection);
        getInfo(selection);
    });
});



var showHero = function(characters) {
	var result = $('.hidden .hero').clone();
    
    var hero = result.find('.name');
	hero.text(characters.name);

    var info = result.find('.details');
	info.text(characters.deck);
    
	return result;
};



var showSearchResults = function(query, resultNum) {
	var results = resultNum + ' results for <strong>' + query;
	return results;
};


var showError = function(error){
	var errorElem = $('.hidden .error').clone();
	var errorText = '<p>' + error + '</p>';
	errorElem.append(errorText);
};


var getInfo = function(selection){
    
    var request = {field_list: 'name,image,deck,real_name,aliases'};
    
    var result = $.ajax({
        url: "http://www.comicvine.com/api/characters/?api_key=145adb79c062d3d1ce533699ca10282a963deede&filter=name:" + selection + "&limit=1&format=json",
        data: request,
        dataType: "jsonp",
        type: "GET",
    }) 
    .done(function(result){
        var searchResults = showSearchResults(result.items.length);
        
		$.each(result.items, function(i, item) {
			var superHero = showHero(item);
            $('.results').append(superHero);
        });
        
        var data = { "heroName": selection };
        alert(data.selection);  
    }) 
    
    .fail(function(jqXHR, error, errorThrown){
		var errorElem = showError(error);
		$('.results-container').append(errorElem);
	});
}