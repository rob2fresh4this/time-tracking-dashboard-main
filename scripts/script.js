// Made by: robert
// inspiered by previous projects from Mr. C at the one school
// added psudo code and notes to help read the code

// Fetch data from JSON file
function getJsonData() {
    return fetch("../data/data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

// Display data on the page
function displayData(data, timeframe) {
    data.forEach(item => {// loop through each item in the data array
        const card = document.getElementById(item.title.toLowerCase());// select the card with the id of the item title
        const current = card.querySelector("#current");// select the current element in the card
        const previous = card.querySelector("#previous");// select the previous element in the card

        // set the text content of the current element to the current hours
        current.textContent = `${item.timeframes[timeframe].current}hrs`;

        // set the text content of the previous element to the previous hours and have the dynamic text for the timeframe
        const timeframeText = timeframe.charAt(0).toUpperCase() + timeframe.slice(1);// capitalize the first letter of the timeframe
        const previousHours = item.timeframes[timeframe].previous;// get the previous hours
        previous.textContent = `Last ${timeframeText} - ${previousHours}hrs`;// set the text content of the previous element
    });
}

// Add event listener to each button
document.querySelectorAll(".profile-buton").forEach(button => {// select all buttons with the class profile-button
    button.addEventListener("click", (event) => {// add event listener to each button
        const timeframe = event.target.textContent.toLowerCase();// get the text content of the button and make it lowercase
        getJsonData().then(data => displayData(data, timeframe));// get the data and display it with the timeframe
    });
});

// load it with the weekly data and display it
getJsonData().then(data => displayData(data, "weekly"));