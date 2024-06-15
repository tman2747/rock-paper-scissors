
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

playerScore = 0
computerScore = 0

function playRound()
{
    humanChoice = prompt(`Hello We're playing rock paper scissors please enter either "rock" "paper" or "scissors`).toLocaleLowerCase()
    computerChoice = getComputerChoice()
    console.log(humanChoice,computerChoice)

    if (humanChoice == computerChoice)
    {
        // do nothing
    }
    else
    {
        if (humanChoice == "rock" && computerChoice == "paper")
        {
            computerScore++
        }
        if(humanChoice == "rock" && computerChoice == "scissors")
        {
            playerScore++
        }
        if (humanChoice == "paper" && computerChoice == "scissors")
        {
            computerScore++
        }
        if(humanChoice == "paper" && computerChoice == "rock")
        {
            playerScore++
        }
        if (humanChoice == "scissors" && computerChoice == "rock")
        {
            computerScore++
        }
        if(humanChoice == "scissors" && computerChoice == "paper")
        {
            playerScore++
        }
    }
}

playRound()