$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/52340",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
})
.done(function(response) {
    
    console.log(response);
    console.log(response.movie);
    
    $('#title').append(response.movie.title);

    $('#img').append('<img src="'+response.movie.poster_image_thumbnail+'"/>');



    if(response.movie.release_dates.FR != undefined) {
    
        $('#date').text(dateUsToFrench(response.movie.release_dates.FR[0].date));
        
    } else if (response.movie.release_dates.US != undefined) {
    
        $('#date').text(dateUsToFrench(response.movie.release_dates.US[0].date));
        
    }

  
    

    for (var i = 0; i < response.movie.crew.length; i++) {
        $('#de').append('De : '+response.movie.crew[i].name+'');
    };

    var actor = response.movie.cast.length;
    console.log(actor);
    if (actor > 5) {
        actor = 5;
    };

    var cast ="";
    for(var i = 0; i < actor; i++) {
        cast += response.movie.cast[i].name+', '
    }



    
        $('#actor').append(cast);
    
    
    $('#genre').append('Genre : '+response.movie.genres[0].name+'');
    $('#distributeur').append('Distributeur : Bac Films ');
    $('#synopsis').append('Synopsis : '+response.movie.synopsis+'');


    var frame = response.movie.trailers[0].trailer_files[0].url.split('=');
    $('#video').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+frame[1]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');









})
.fail(function(error) {
    console.log("HTTP Request Failed");
});




if(navigator.geolocation) {
    
    console.log('il y a la géoloc');
    
    navigator.geolocation.getCurrentPosition(position);
    
} else {

  console.log('Pas de geoloc');
}


function dateUsToFrench(date) {

    var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    var tabdate = date.split('-');
    
    var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];
    
    return newDate;
}




function position(pos) {

    console.log(pos);
    var location = pos.coords.latitude.toFixed(2)+','+pos.coords.longitude.toFixed(2);
    console.log(location);
    var date = new Date();
    console.log(date);

    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id=52340&countries=FR&location="+location+"&time_to="+date+"&distance=50",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
})
.done(function(response) {
    console.log("HTTP Request Succeeded! ");
    console.log(response);

        var showtimes = [];
    
    
    for(var i = 0; i < response.showtimes.length; i++) {
        var seance = splitSeance(response.showtimes[i].start_at);
        
        var test = true;
        for (var j = 0; j < showtimes.length; j ++) {
            
            if (showtimes[j].cineId == response.showtimes[i].cinema_id) {
                
                    showtimes[j].show.time.push(seance.hour);
                    showtimes[j].show.url.push(response.showtimes[i].booking_link);
                    test = false;
                
                }
            }
            
            if (test == true) {
                showtimes.push({
                cineId :  response.showtimes[i].cinema_id,
                show : {
                            time : [seance.hour],
                             url : [response.showtimes[i].booking_link]
                       } 
                });
            }
    
    }
    
    console.log('nouveau tab', showtimes);
    
})






.fail(function(error) {
    console.log("HTTP Request Failed");
})

}

function splitSeance(string) {
    var tabDate = string.split('T');
    var day = tabDate[0];
    var resultHours = tabDate[1].split(':');  // tabDate[1]  11:00:00+01:00  tabgDate[1].split(':') => ['11', '00', '00+01', '00']
    
    var result = { day: day, hour: resultHours[0]+':'+resultHours[1] };
    
    return result;
}




/*************************** CORRECTION ******************/

