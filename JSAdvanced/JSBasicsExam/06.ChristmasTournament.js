function christmasTournament(input)
{
    let index = 0;
    let dayCount = Number(input[index]);
    index++;

    let money = 0;
    let winGamesCount = 0;
    let loseGamesCount = 0;
    let totalSum = 0;
    let winningDays = 0;
    let totalWins = 0;

    for (let i = 0; i < dayCount; i++)
    {        
        while (true)
        {    
            let command = input[index];

            if (command === "Finish")
            {
                break;
            }

            let gameName = command;
            index++;
            let gameResult = input[index];
            index++;
                                
            if (gameResult === "win")
            {
                money += 20;
                winGamesCount++;
            }
            else if (gameResult === "lose")
            {
                loseGamesCount++;
            }
        }

        index++;

        if (winGamesCount > loseGamesCount)
        {
            money *= 1.1;
            totalSum += money;
            money = 0;
            winningDays++;            
        }
        else
        {
            totalSum += money;
            money = 0;
        }

        totalWins += winGamesCount;
        winGamesCount = 0;
        loseGamesCount = 0;
    }

    if (totalWins / 2 > dayCount)
    {
        totalSum*= 1.2;

        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }   
    else
    {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }
}

christmasTournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])





