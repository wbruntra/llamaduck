/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var maxRoundTime = 2000;

var score = 0;
var timeForRound = maxRoundTime;
var timeStart = 0;
var activeAnimal = "";
var gamePaused = true;

$('#start-button').click(function () {
  if (gamePaused) {
  gamePaused = false;
  score = 0;
  $('#loser-display').hide();
  startRound();
  }
});

$('button.chooser').click(function() {
  if (!gamePaused) {
    var choice = $(this).data('choice');
    if (choice == activeAnimal) {
      score++
      $('#score-display').html(score);
      timeForRound = .92 * timeForRound;
      startRound();
    }
    else {
      $('#loser-display').show();
      gamePaused = true;
    }
  }
});

$(document).on('keydown',function(e) {
  var llamaKey = 74;
  var duckKey = 70;
  var startKey = 83;
  if (e.which == llamaKey) {
    $('#llama-button').click();
  }
  else if (e.which == duckKey) {
    $('#duck-button').click();
  }
  else if (e.which == startKey) {
    $('#start-button').click();
  }
});

function reset() {
  score = 0;
}

function startRound() {
  timeStart = Date.now();
  if (Math.random() > .5) {
    activeAnimal = "llama";
  }
  else {
    activeAnimal = "duck";
  }
  var num = getRandomInt(1,15);

  $('#picture').attr('src','img/'+activeAnimal+'-'+num+'.jpg');
}

function tick() {
  if (!gamePaused) {
    if ((Date.now() - timeStart) > timeForRound) {
      timeForRound = maxRoundTime;
      $('#loser-display').show();
      gamePaused = true;
    }
  }
}

setInterval(tick, 50);