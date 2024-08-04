let play = document.querySelector("#playButton")
let rockButton = document.querySelector("#rock")
let paperbutton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")

let win = document.querySelector("#win")
let loss = document.querySelector("#loss")
let draw = document.querySelector("#draw")

let container = document.querySelector(".box")

let playerScore = 0
let computerScore = 0
let drawScore = 0
let humanChoice = "whatever"
let firstGame = true;
let outcomeText = document.createElement("div")
outcomeText.textContent = "DEBUGKEKW"
outcomeText.style.justifyContent = "center"
outcomeText.style.display = "flex"
function getComputerChoice()
{
    randomValue = Math.random()
    if (randomValue <= .3)
        return "rock"
    else if (randomValue <= .6 && randomValue > .3)
        return "paper"
    else
        return "scissors"
}

function playRound()
{
    computerChoice = getComputerChoice()

    console.log(`Computer chose:${computerChoice}`)

    if (firstGame)
    {
        container.appendChild(outcomeText)
        firstGame = false
    }
    if (humanChoice == computerChoice)
    {
        // add to draw
        drawScore++;
        outcomeText.textContent = "Draw"
        outcomeText.style.color = "grey"
        outcomeText.style.justifyContent = "center"
        outcomeText.style.display = "flex"

    }
    else
    {
        if (humanChoice == "rock" && computerChoice == "paper")
        {
            computerScore++
            outcomeText.textContent = "You Lose"
        outcomeText.style.color = "red"

        }
        if (humanChoice == "rock" && computerChoice == "scissors")
        {
            playerScore++
            outcomeText.textContent = "You Win"
            outcomeText.style.color = "green"


        }
        if (humanChoice == "paper" && computerChoice == "scissors")
        {
            computerScore++
            outcomeText.textContent = "You Lose"
            outcomeText.style.color = "red"


        }
        if (humanChoice == "paper" && computerChoice == "rock")
        {
            playerScore++
            outcomeText.textContent = "You Win"
            outcomeText.style.color = "green"


        }
        if (humanChoice == "scissors" && computerChoice == "rock")
        {
            computerScore++
            outcomeText.textContent = "You Lose"
        outcomeText.style.color = "red"


        }
        if (humanChoice == "scissors" && computerChoice == "paper")
        {
            playerScore++
            outcomeText.textContent = "You Win"
            outcomeText.style.color = "green"
        }
    }
    win.textContent = `Win: ${playerScore}`
    loss.textContent = `Loss: ${computerScore}`
    draw.textContent = `Draw: ${drawScore}`
    console.log(`Players score: ${playerScore}\nComputers score: ${computerScore} `)
}

play.addEventListener("click", () =>
{
    console.log("Play Hit") // playRound() and unhide score / buttons
    const scoreboard = document.querySelector(".scoreBoard")
    const gameButtons = document.querySelector(".gameButtons")
    scoreboard.style.display = "flex"
    gameButtons.style.display = "flex"

})

rockButton.addEventListener("click", () =>
{
    humanChoice = "rock"
    playRound()

})

paperbutton.addEventListener("click", () =>
{
    humanChoice = "paper"
    playRound()

})

scissorsButton.addEventListener("click", () =>
{
    humanChoice = "scissors"
    playRound()
})

console.log(`Players score: ${playerScore}\nComputers score: ${computerScore} `)