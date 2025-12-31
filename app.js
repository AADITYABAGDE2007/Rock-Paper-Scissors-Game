let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user-score")
const compScorePare = document.querySelector("#computer-score")


const getCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const RanInd = Math.floor(Math.random() * 3);
    return options[RanInd];
};

const drawGame = () => {
    console.log("Game was drow");
    msg.innerText = "Game was draw, Play again.";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, CompChoice, userChoice) => {
    if(userWin){
        userScore++;
        userScorePare.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePare.innerText = compScore;
        msg.innerText = `You loss. ${CompChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    // generate computer choice
    const CompChoice = getCompChoice();
    console.log("Computer choice =" , CompChoice);

    if(userChoice == CompChoice ){
        drawGame();
    }else{
        let userWin =true;
        if( userChoice === "rock"){
            userWin = CompChoice === "pepar" ? false : true;
        }else if(userChoice === "pepar"){
            userWin = CompChoice === "scissors" ? false : true;
        }else{
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, CompChoice, userChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});