// // JS for signUp page

// var signup = document.getElementById("signUp");

// signup.addEventListener("click", saveCreds)

// function saveCreds(e)
// {
//     e.preventDefault();
//     var fname = document.getElementById("fname").value;
//     var mname = document.getElementById("mname").value;
//     var lname = document.getElementById("lname").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     if(password != confirmPassword)
//     {
//         alert("Passwords do not match, retype password");
//     }
//     else
//     {
        
//     }

//     console.log( fname + mname + lname);
// }



// JS for location page
var buttons = document.getElementsByClassName("selectButton");
var displayLocation = document.getElementById("displayLocation");

for (var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', locationPrint)
}

function locationPrint()
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


// // JS for confirmation 
// var displayLocationConfirmation = document.getElementById("displayLocation");
   
// displayLocationConfirmation.innerHTML = fname;

