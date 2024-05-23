'use strict'
/*
//buttons
-NewGame
1- Reset the scores 
2- get New random number

-RollDice
1-Get Random Number Bewtween 1-6 and put its image

-Hold
1-save current score inot final-score 
2-change player turn

*/

// Selecting Elments
const player0El = document.querySelector(".player1");
const player1El = document.querySelector(".player2");
const score0El = document.getElementById("score-1");
const score1El = document.getElementById("score-2");
const current0El = document.getElementById("current-1");
const current1El = document.getElementById("current-2");
const newGame_btn = document.querySelector(".new-btn");
const roll_btn = document.querySelector(".roll-btn");
const hold_btn = document.querySelector(".hold-btn");
const dice = document.querySelector(".dice");

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    dice.classList.add("hide");
    player0El.classList.remove("winner");
    player1El.classList.remove("winner");
    player0El.classList.add("active");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
}
const switchPlayer = function () {
    currentScore = 0;
    document.querySelector(".active .current-score").textContent = currentScore;
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
    !activePlayer;
}
const checkWinner = function () {
    if (scores[activePlayer] >= 100) {
        document.querySelector(".active").classList.add("winner");
        playing = false;
    }
    else {
        switchPlayer();
    }
}
init();

roll_btn.addEventListener('click', function () {
    if (playing) {
        //Generate Random dice roll
        const dice_num = Math.floor(Math.random() * 6) + 1;

        //Display roll num
        dice.classList.remove('hide');
        dice.src = `/dice_images/dice-${dice_num}.png`;

        if (dice_num != 1) {
            currentScore += dice_num;
            document.querySelector(".active .current-score").textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});
hold_btn.addEventListener('click', function () {
    if (playing) {
        // 1.Adding curernt score to player's score
        scores[activePlayer] += currentScore;
        document.querySelector(".active .score").textContent = scores[activePlayer];
        checkWinner();

    }
});
newGame_btn.addEventListener('click', init);