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

// document.getElementById("password")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("loginBtn").click();
//     }
// });

// Set min date to today's date

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);


//JS for date and time

var submitDate = document.getElementById("submitDate");
submitDate.addEventListener("click", Dateprint)
function Dateprint(e)
{
    e.preventDefault();
    var date = document.getElementById("date").value;
    var dateString = date.toString();
    var dateNumber = dateString.slice(8,10); 
    console.log(dateString);
    console.log(dateNumber);
    // dateNumber now had the date-number stored in it.

 if(dateString == ''){
     alert("Enter Date");
 }
 else{
 if(dateNumber % 2 == 0 || dateNumber % 3 == 0 || dateNumber % 5 == 0 || dateNumber % 7 == 0 || dateNumber % 11 == 0){
    if(dateNumber % 2 == 0){
        $('.dateTable').show(); 
        $('.divBy2').show();   
    }
    else{
        $('.divBy2').hide();
    }

    if(dateNumber % 3 == 0){
        $('.dateTable').show(); 
        $('.divBy3').show();  
    }
    else{
        $('.divBy3').hide();
    }

    if(dateNumber % 5 == 0){
        $('.dateTable').show(); 
        $('.divBy5').show();  
    }
    else{
        $('.divBy5').hide();
    }

    if(dateNumber % 7 == 0){
        $('.dateTable').show(); 
        $('.divBy7').show();  
    }
    else{
        $('.divBy7').hide();
    }

    if(dateNumber % 11 == 0){
        $('.dateTable').show(); 
        $('.divBy11').show();  
    }
    else{
        $('.divBy11').hide();
    }
 }
 else{
    $('.dateTable').hide();
     $('.divBy2').hide();
     $('.divBy3').hide();
     $('.divBy5').hide();
     $('.divBy7').hide();
     $('.divBy11').hide();
    
     alert("No Time Slots Available");
 }
}
};

// JS for age
function noFunc()
{
    alert("Sorry you are under age to get a vaccination right now");
}
function yesFunc()
{
    alert("You are eligible to get free vaccinations from Health Canada!");
}