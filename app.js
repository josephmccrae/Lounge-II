$(document).ready(function(){
    
    $('.heroSelect').on('click',function(){

        getInfo();
    });
     
});

    

    var getInfo = function(){

        var result = $.ajax({
            url: "www.comicvine.com/api/character/?api_key=145adb79c062d3d1ce533699ca10282a963deede&filter=gender:female",
            dataType: "jsonp",
            type: "GET",
            });
    };




