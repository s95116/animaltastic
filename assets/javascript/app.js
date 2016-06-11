// This .on("click") function will trigger the AJAX Call
	$('#findAnimal').on('click', function(){

		//Grabs the animal entered in the text box
		var animal = $('#animal-input').val();

		//Query URL for Giphy API
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

		// AJAX Query syntax
			$.ajax({url: queryURL, method: 'GET'})
	 
	 		.done(function(response) {

	 			console.log(queryURL);
	 			console.log(response);

	 			// var results = response.data;

	 			// for (var i = 0; i < results.length; i++) {
     			// console.log(results[i]) //prints the results of the for loop


                // var animalDiv = $('<div>');
                //     var p = $('<p>');
                //     console.log(results[i].rating);
                //     p.text(results[i].rating);

                //     var animalImage = $('<img>')
                //     animalImage.attr('src', results[i].images.fixed_height.url);

                //     animalDiv.append(p);
                //     animalDiv.append(animalImage);

                //     $('#gifArea').prepend(animalDiv);


	 			// $('#movieView').html(myobject);
	 			// $('#gifArea').html(JSON.stringify(response)); //convert objects into string


			}); 
		return false;
	});
