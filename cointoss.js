const flip = document.querySelector('#flip');
//number will be used to generate a random number for the result of the coin flip
let number = 0;
//variables to keep track of wins and losses
let wins = 0;
let losses = 0;

//add event listener for flip button
flip.addEventListener('click', function(){
    {
        //generates a random number
        number = Math.random();
        //confirms that game is not over yet
        if(wins < 10 && losses < 10){
        //if random number is less than 5, the coin will say heads
        if((number * 10) < 5){
            wins++;
            document.querySelector('#coin').textContent = "HEADS"
            document.querySelector('#winCount').textContent = wins
        }
        //random number is 5 or greater, so coin will say tails
        else{
            losses++;
            document.querySelector('#coin').textContent = "TAILS"
            document.querySelector('#loseCount').textContent = losses
        }
    }

        //Displays Game Over
        if(wins === 10){
            document.querySelector('#gameOver').textContent = "GAME OVER! YOU WIN!"
        }
        if(losses === 10){
            document.querySelector('#gameOver').textContent = "GAME OVER! YOU LOSE!"
        }
    }

});
