$(document).ready(function(){
    $('.search').submit(function(event){
        // clear out results from previous searches
        $('.results').html('');
        //get value of selected button
        var lyric = $(this).find("input[name='lyric']").val();
        console.log(lyric);
        getInfo(lyric);
    });
});



var showLyric = function(songs) {
	var result = $('.hidden .verse').clone();
    
    var artist = result.find('.name');
	artist.text(songs.artist.name);

    var titleElem = result.find('.title a');
	titleElem.attr('href', songs.url);
	titleElem.text(songs.title);
    
    var clip = result.find('.clip');
	clip.text(songs.context);
    
	return result;
};


var getInfo = function(lyric){
    
    var name;
    var title;
    
    var result = $.ajax({
        url: "http://api.lyricsnmusic.com/songs?api_key=69ffd627428af8183c89c2b222edc7",
        data: {artist: name, track:title, lyrics: lyric },
        dataType: "jsonp",
        type: "GET",
    }) 
    .done(function(result){
                
        $.each(result.data, function(i, item) {
			var tune = showLyric(item);
			$('.results').append(tune);
            console.log(tune);
		});
    })
}