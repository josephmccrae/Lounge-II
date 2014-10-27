$(document).ready(function(){
    
    $('.heroSelect').on('click',function(){
        getInfo();
    });
});

    
    

    var getInfo = function(characters){

        var result = $.ajax({
            url: "http://www.comicvine.com/api/characters/?api_key=145adb79c062d3d1ce533699ca10282a963deede&filter=name:Batman",
            dataType: "jsonp",
            type: "GET",
            })
        
        .done(function(result){
            console.log(characters.name);
        };






