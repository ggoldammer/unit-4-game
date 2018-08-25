var randomNumber;
var yourScore = 0;

var wins = 0;
var losses = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

//Randomizes Selected Number and all 4 gems.
function restart() {

    randomNumber;
    yourScore = 0;

    gem1 = 0;
    gem2 = 0;
    gem3 = 0;
    gem4 = 0;

    randomNumber = Math.floor(Math.random() * 120);
    $('#selectedNumber').text(randomNumber);
    gem1 = Math.floor(Math.random() * 12 + 1);
    console.log('gem1 = ' + gem1);
    gem2 = Math.floor(Math.random() * 12 + 1);
    console.log('gem2 = ' + gem2);
    gem3 = Math.floor(Math.random() * 12 + 1);
    console.log('gem3 = ' + gem3);
    gem4 = Math.floor(Math.random() * 12 + 1);
    console.log('gem4 = ' + gem4);
}

restart();

//Displays Initial Random Number, Your Score, Wins, and Losses
$('#yourScore').text(yourScore);
$('#wins').text(wins);
$('#losses').text(losses);

//Gem click functions
$('#gem1').on('click', function () {
    yourScore = gem1 + yourScore;
    console.log('Score: ' + yourScore);
    $('#yourScore').text(yourScore);
    scoring();
});

$('#gem2').on('click', function () {
    yourScore = gem2 + yourScore;
    console.log('Score: ' + yourScore);
    $('#yourScore').text(yourScore);
    scoring();
});

$('#gem3').on('click', function () {
    yourScore = gem3 + yourScore;
    console.log('Score: ' + yourScore);
    $('#yourScore').text(yourScore);
    scoring();
});

$('#gem4').on('click', function () {
    yourScore = gem4 + yourScore;
    console.log('Score: ' + yourScore);
    $('#yourScore').text(yourScore);
    scoring();
});

//Scoring statements
function scoring() {
    if (randomNumber === yourScore) {
        wins++;
        console.log('Wins: ' + wins);
        $('#wins').text(wins);
        restart();
    } else if (yourScore > randomNumber) {
        losses++;
        console.log('Losses: ' + losses);
        $('#losses').text(losses);
        restart();
    }
}