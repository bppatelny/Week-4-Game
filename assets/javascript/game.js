$(document).ready(function() {

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newGame();

	function newGame() {

		counter = 0;
		
		// Define random values on new game
		var redValue = randomIntFromInterval(1, 12);
		var blueValue = randomIntFromInterval(1, 12);
		var yellowValue = randomIntFromInterval(1, 12);
		var greenValue = randomIntFromInterval(1, 12);

		$('#myScore').text(counter);

		function randomIntFromInterval(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		var numberToGuess = randomIntFromInterval(19, 120);

		$('.value').text(numberToGuess);
		
		// Handle Red Stone Click Event
		$('#redCrystal').click(function() {
			counter = counter + redValue;
			$('#myScore').text(counter);

		    if (counter == numberToGuess) {
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if (counter > numberToGuess) {
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    }
		});
		
		// Handle Blue Stone Click Event
		$('#blueCrystal').click(function() {
			counter = counter + blueValue;
			$('#myScore').text(counter);

		    if (counter == numberToGuess) {
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if (counter > numberToGuess) {
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    }
		});

		// Handle Yellow Stone Click Event
		$('#yellowCrystal').click(function() {
			counter = counter + yellowValue;
			$('#myScore').text(counter);

		    if (counter == numberToGuess) {
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if (counter > numberToGuess) {
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    }
		});

		// Handle Green Stone Click Event		
		$('#greenCrystal').click(function() {
			counter = counter + greenValue;
			$('#myScore').text(counter);

		    if (counter == numberToGuess) {
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if (counter > numberToGuess) {
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    }
		});

	}

});