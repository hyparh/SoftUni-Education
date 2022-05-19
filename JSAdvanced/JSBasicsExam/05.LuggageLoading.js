function luggageLoading(input)
{
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let suitcasesCount = 0;
    let boolFlag = false;
    
    while (true)
    {
        let command = input[index];
        index++;

        if (command === "End")
        {
            break;
        }

        if (suitcasesCount % 2 === 0 && suitcasesCount !== 0)
        {
            command *= 1.1;
        }

        capacity -= command;

        if (capacity <= 0)
        {
            console.log(`No more space!Statistic: ${suitcasesCount} suitcases loaded.`);
            boolFlag = true;

            break;
        }
        else
        {
            suitcasesCount++;
        }
    }

    if (boolFlag === false)
    {
        console.log(`Congratulations! All suitcases are loaded!Statistic: ${suitcasesCount} suitcases loaded.`);
    }   
}

luggageLoading(["700.5",
"180",
"340.6",
"126",
"220"])




