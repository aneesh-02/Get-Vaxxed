// JS for location page
var buttons = document.getElementsByClassName("selectButton");
var displayLocation = document.getElementById("displayLocation");

for (var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', calc)
}

function calc()
{
    var locValue = this.getAttribute('data-value');
    var text = displayLocation.textContent.trim();

    if(locValue == "location 1")
    {
        displayLocation.innerText = "Shoppers Drug Mart 800, 265 Port Union Rd.";
    }
    else if(locValue == "location 2")
    {
        displayLocation.innerText = "Guildcrest Pharmacy, 629 Markham Rd";
    }
    else if(locValue == "location 3")
    {
        displayLocation.innerText = "No Frills, 255 Morningside Ave  ";
    }
    else if(locValue == "location 4")
    {
        displayLocation.innerText = "Metro Pharmacy, 3401 LAWRENCE AVE E ";
    }
    else if(locValue == "location 5")
    {
        displayLocation.innerText = " West Hill Pharmasave, 3221 Eglinton Avenue East";
    }
    else
    {
        displayLocation.innerText = "X";
    }
}    


// JS for date and Time page
var date = document.getElementById("date");
var displaytime = document.getElementById("display-time");
var formdate = document.getElementById("form-date");

formdate.addEventListener("submit", funx )

function funx()
{
    var aa = date.value;

    displaytime.innerText = aa;
}