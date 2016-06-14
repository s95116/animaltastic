$(document).ready(function() {

	//Global variable(s)
	var userAnimals = [];


	//Gif AJAX Query

	//On click function for animal buttons
	$('.animalButton').on('click', function() {
	
	$('#gifArea').empty(); 
$("#animal-input").empty();
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

                // Retrieve image information
                var results = response.data;

                //Loop through results
                for (var i = 0; i < results.length; i++) {

                	 //Append/Prepend gif results + gif rating to page
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

	//On click function for adding new animal buttons
	$('#addAnimal').on('click',function() {

		
		//Create new variable from input-box
		var newAnimal = $('#animal-input').val().trim();
		console.log(newAnimal);

		//The new animal gets pushed into the newAnimal array
		userAnimals.push(newAnimal);

		

		//Loops through the array and creats new buttons for each new animal
		for (var i = 0; i < userAnimals.length; i++) {

			// if (userAnimals[i] == userAnimals) {
				
			// }
			// else {
		var newButton = $('<button>');
		newButton.addClass('btn-custom animalButton');
		// newButton.addClass('');
		newButton.attr('data-name', userAnimals[i]);
		newButton.text(userAnimals[i])

		//Adds new button to the page
		$('#animal-buttons').append(newButton)
			}
		
		}
		
		//Prevents page from reloading
		// return false;

	});

// function unique(list) {
//     var result = [];
//     $.each(list, function(i, e) {
//         if ($.inArray(e, result) == -1) result.push(e);
//     });
//     return result;
// }

 
});//End of document.ready function


