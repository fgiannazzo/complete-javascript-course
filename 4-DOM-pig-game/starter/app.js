/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Variables
var scores, roundScore, activePlayer, gamePlaying;

//On Load Setup

newGame();

function newGame() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
//document.querySelector('.btn-hold').style.display = 'block';
//document.querySelector('.btn-roll').style.display = 'block';  
}

//Event Handlers
document.querySelector('.btn-roll').addEventListener('click', btn);


//Event Handler Functions
function btn() {
    if(gamePlaying) {
        dice = Math.floor(Math.random() * 6) + 1; 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            toggleplayer();
        }
    }
}

function toggleplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0'; 
    roundScore = 0;
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {  
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.querySelector('#score-' + activePlayer).textContent = "WINNER";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            //document.querySelector('.btn-hold').style.display = 'none';
            //document.querySelector('.btn-roll').style.display = 'none';  
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {
            toggleplayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);