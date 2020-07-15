function rpsGame(yourChoice) {
	console.log(yourChoice); 
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;
	botChoice = numberToChoice(randomToRpsInt());
	console.log( 'Computer choice: ' , botChoice);
	
	results = decideWinner(humanChoice, botChoice);
	console.log(results);
	
	message = finalMessage(results); //{message: 'You won!', 'color': 'green'}
	console.log(message);

	rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt() {
	return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
	return ['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice) {
	var rpsDatabase ={
		'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
		'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
		'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},
	}

	var yourScore = rpsDatabase [yourChoice] [computerChoice];
	var computerScore = rpsDatabase [computerChoice] [yourChoice];

	return [yourScore, computerScore];
}

//return console.log('Your Choice: ' + [yourChoice] + '\nComputer Choice: ' + [computerChoice]);

function finalMessage([yourScore, computerScore]) {
	if (yourScore === 0) {
		return {'message': 'You lost!', 'color': 'red'};
	} else if (yourScore === 0.5) {
		return {'message': 'You tied!', 'color': 'silver'};
	} else {
		return {'message': 'You won!', 'color': 'green'};
	}

}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
	var imagesDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	}

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(100, 78, 150, 1)'>"
	messageDiv.innerHTML = "<h1 style='color: " +finalMessage ['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage ['message'] + "</h1>"
	botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 78, 100, 1)'>"

	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);
	
}