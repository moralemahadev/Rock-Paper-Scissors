 // variable declartion
 let userScore = 0;
 let compScore = 0;

 // getting the value from html user choices
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

// computer random choices function
 const genCompChoice = () => {
   const options = ["rock","paper", "Scissors"];
   const randIdx = Math.floor(Math.random() * 3 );
   return options[randIdx];
 }

 // drawGame function
 const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "yallow";

 }

 // showWinner function
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

 // Main function
 const playGame = (userChoice) => { 
    console.log("user choice=", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
        // if user choose the rock then comp choose either paper or scissors if comp choose "paper" then comp win
           userWin = compChoice === "paper" ? false : true;
         } else if(userChoice === "paper") {
            // rock, Scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



 //Add EventListener on each div
 choices.forEach((choise) => {
  //console.log(choise);
    choise.addEventListener("click", () => {
        // Create local variable for the id attribute for the all div
        const userChoice = choise.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
 });