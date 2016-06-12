$(document).ready(function() {

	//Gif AJAX Query

	//On click function for animal buttons
	$('.animalButton').on('click', function() {

		//Define variables & Giphy API
        var animal = $(this).data('animal');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        //AJAX Query
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

            	//Console.log to see results
                console.log(queryURL);
                console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                var results = response.data;

                //Loop through results
                for (var i = 0; i < results.length; i++) {

                	 //Prepend results to page
                    var animalDiv = $('<div>');
                    var p = $('<p>').text("Rating: " + results[i].rating);
                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $('#gifArea').prepend(animalDiv);

                }
            });
    });


});//End of document.ready function


