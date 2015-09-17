var whichTemp = prompt("Enter a letter: 'f' for fahrenheit, 'c' for celsius, and 'k' for kelvin.");
var letter = [];

if(whichTemp === "f")
{
    var fahrenheitTemps = [];
    fahrenheitTemps[0] = prompt("Enter a number for fahrenheit: ");
    fahrenheitTemps[1] = (fahrenheitTemps[0] - 32) / 1.8;
    fahrenheitTemps[2] = (fahrenheitTemps[0] + 459.67) / 1.8;

    letter[0] = "F = ";
    letter[1] = "C = ";
    letter[2] = "K = ";

    console.log("\n");
    for(var i = 0; i < 3; i++)
    {
        console.log(letter[i] + fahrenheitTemps[i]);
    }
}
else if(whichTemp === "c")
{
    var celsiusTemps = [];
    letter[0] = "C = ";
    letter[1] = "F = ";
    letter[2] = "K = ";

    celsiusTemps[0] = prompt("Enter a number for celsius: ");
    celsiusTemps[1] = celsiusTemps[0] * 1.8 + 32;
    celsiusTemps[2] = celsiusTemps[0] + 273.15;

    console.log("\n");
    for(var i = 0; i < 3; i++)
    {
        console.log(letter[i] + celsiusTemps[i]);
    }
}

else if(whichTemp === "k")
{
    var kelvinTemps = [];
    kelvinTemps[0] = prompt("Enter a number for Kelvin: ");
    kelvinTemps[1] = kelvinTemps[0] - 273.15;
    kelvinTemps[2] = kelvinTemps[0] * 1.8 - 459.67;

    letter[0] = "K = ";
    letter[1] = "F = ";
    letter[2] = "C = ";

    console.log("\n");
    for(var i = 0; i < 3; i++)
    {
        console.log(letter[i] + kelvinTemps[i]);
    }
}
else
    console.log("\nSorry try again...");