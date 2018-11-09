// Define UI Variables
let holidayDateInput = document.querySelector('.date-input');
let resultsArea = document.querySelector('#results');
const submit = document.querySelector('#form-submit');


// Define al the variables i need to do the calculation and display the result
let holidayDate = new Date();
let today = new Date().getTime();
let timeRemaining
let monthsRemaining;
let weeksRemaining;
let daysRemaining;


// Load Event Listeners
loadEventListeners();


// Trigger the date to be calculated on the click of the Calculate button
function loadEventListeners(){
    submit.addEventListener('click', calculateDate);
}




// Do the calculations 
function calculateDate(e){

    holidayDate = holidayDateInput.value;
    holidayDate = new Date(Date.parse(holidayDate));
    holidayDate = holidayDate.getTime();

    daysRemaining = Math.ceil((holidayDate - today) / 1000 / 60 / 60 / 24);
    weeksRemaining = Math.ceil((holidayDate - today) / 1000 / 60 / 60 / 24 / 7);
    monthsRemaining = Math.ceil((holidayDate - today) / 1000 / 60 / 60 / 24 / 30)

    // Display the calcuated result to the end user
    displayResult();

    e.preventDefault();
}

// Function to display the result on the page for the user
function displayResult(){
    resultsArea.style = 'display: block';

    if(daysRemaining < 0 || isNaN(daysRemaining)){
        resultsArea.innerHTML = 'Please Enter A Date In The Future and Try Again...'
    }
    else if(daysRemaining > 30){
    resultsArea.innerHTML = `
    There are ${daysRemaining} days until your holiday! <br>
    That's just ${weeksRemaining} weeks!
    `;
    } else {
        resultsArea.innerHTML = `
    There are only ${daysRemaining} days until your holiday!
    `;
    }
}



