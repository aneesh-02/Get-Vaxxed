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

//JS for date and time

var submitDate = document.getElementById("submitDate");
submitDate.addEventListener("click", Dateprint)
function Dateprint(e)
{
    e.preventDefault();
    var date = document.getElementById("date").value;
    var dateString = date.toString();
    var dateNumber= dateString.slice(8,10); 
    // console.log(dateString ;
    console.log(dateNumber);
    // dateNumber now had the date-number stored in it.

//     var displayTime1 = document.getElementById("displayTime1");
//     var displayTime2 = document.getElementById("displayTime2");
//     var displayTime3 = document.getElementById("displayTime3");
//     var displayTime4 = document.getElementById("displayTime4");
//     var displayTime5 = document.getElementById("displayTime5");
//     if(dateNumber == 1 || dateNumber == 13 || dateNumber == 17 || dateNumber == 19 || dateNumber == 23 ||dateNumber == 29 ||dateNumber == 31)
//     {
//         displayTime1.innerHTML = "Not Available";
//     }
//     else if(dateNumber == 30)
//     {
//         displayTime1.innerHTML = "10:00 - 10:10   <br> 11:20 - 11:30 <br> 14:10 - 14:20  ";
//     }
//     else if(dateNumber % 2 == 0)
//     {
//         displayTime1.innerHTML = "10:00 - 10:10"; 
//     }
//     else if(dateNumber % 3 == 0)
//     {
//         displayTime1.innerHTML = "11:20 - 11:30";        
//     }
//     else if(dateNumber % 5 == 0)
//     {
//         displayTime1.innerHTML = "14:10 - 14:20"; 
//     }
//     else if(dateNumber % 7 == 0)
//     {
//         displayTime1.innerHTML = "15:40 - 15:50"; 
//     }
//     else if(dateNumber % 11 == 0)
//     {
//         displayTime1.innerHTML = "17:30 - 17:40"; 
//     }
    // else if()
    // else
    // {
    //     displayTime1.innerHTML = "Not Available"; 
    // }

    // displayTime.innerHTML = dateNumber ; 
}



//JS for login page

var usernames = ["test1@gmail.com", "test2@gmail.com", "test3@gmail.com", "test4@gmail.com"];
var passwords = ["test1",           "test2",           "test3",            "test4"];

function validateLogin(){


    var x = document.getElementById('email').value.toLowerCase();
    var y = document.getElementById('password').value;


    var valid = false;

    validate(x, y);

    function validate(username, password) {

        for (var i=0; i <usernames.length; i++) {
            if ((username == usernames[i]) && (password == passwords[i])) {
                valid = true;
                break;  
            }
        }
    }

    if(valid) {
        window.location="home.html";
    }
    else {
    alert("invalid credentials");
    }
};

document.getElementById("password")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("loginBtn").click();
    }
});