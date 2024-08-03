let play = document.querySelector("#playButton")
let rockButton = document.querySelector("#rock")
let paperbutton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")

let win = document.querySelector("#win")
let loss = document.querySelector("#loss")
let draw = document.querySelector("#draw")

let playerScore = 0
let computerScore = 0
let drawScore = 0
let humanChoice = "whatever"

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

    if (humanChoice == computerChoice)
    {
        // add to draw
        drawScore++;
    }
    else
    {
        if (humanChoice == "rock" && computerChoice == "paper")
        {
            computerScore++
        }
        if (humanChoice == "rock" && computerChoice == "scissors")
        {
            playerScore++
        }
        if (humanChoice == "paper" && computerChoice == "scissors")
        {
            computerScore++
        }
        if (humanChoice == "paper" && computerChoice == "rock")
        {
            playerScore++
        }
        if (humanChoice == "scissors" && computerChoice == "rock")
        {
            computerScore++
        }
        if (humanChoice == "scissors" && computerChoice == "paper")
        {
            playerScore++
        }
    }
    // change win lose draw here probably
    win.textContent = `Win: ${playerScore}`
    loss.textContent = `Loss: ${computerScore}`
    draw.textContent = `Draw: ${drawScore}`
    console.log(`Players score: ${playerScore}\nComputers score: ${computerScore} `)
    // possibly add some more text to give feedback on what the computer choose with a red green or black/ grey color if its a win loss or tie
}

play.addEventListener("click", () =>
{
    console.log("Play Hit") // playRound() and unhide score / buttons

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