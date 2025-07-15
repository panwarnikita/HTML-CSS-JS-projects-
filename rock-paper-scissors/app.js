const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const buttons = document.getElementsByClassName("rock");
const heading = document.getElementById("Heading");
const cpuChoices = ["rock", "paper", "scissors"];

for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];
    button.addEventListener("click", play);
}

function play(event){
    const user = event.target.alt;
    const cpu = cpuChoices[Math.floor(Math.random()*3)];

    player.src = user+".png";
    computer.src = cpu+".png";

    if(user === cpu){
        heading.innerText = "It's a draw";
    }else if((user === "rock" && cpu === "scissors") || (user === "paper" && cpu === "rock") || (user === "scissors" && cpu === "paper")){
        heading.innerText = "You win!";
    }else{
        heading.innerText = "CPU wins!";
    }
}