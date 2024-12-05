// Made by: robert g
// inspiered by previous projects from Mr. C at the one school
// added psudo code and notes to help read the code and if anyone wants to learn from it

// Fetch data from JSON file
async function getJsonData() {
    const response = await fetch("../data/data.json");// fetch the data from the data.json file
    const data = await response.json();// convert the response to json
    return data;// return the data
}

// Display data on the page
function displayData(data, timeframe) {
    data.forEach(item => {// loop through each item in the data array
        const card = document.getElementById(item.title.toLowerCase());// select the card with the id of the item title
        const current = card.querySelector("#current");// select the current element in the card
        const previous = card.querySelector("#previous");// select the previous element in the card

        // set the text content of the current element to the current hours using "template literal"
        current.textContent = `${item.timeframes[timeframe].current}hrs`;

        // set the text content of the previous element to the previous hours and have the dynamic text for the timeframe using "template literal"
        const timeframeText = timeframe.charAt(0).toUpperCase() + timeframe.slice(1);// capitalize the first letter of the timeframe
        const previousHours = item.timeframes[timeframe].previous;// get the previous hours
        previous.textContent = `Last ${timeframeText} - ${previousHours}hrs`;// set the text content of the previous element
    });
}


const buttons = document.querySelectorAll(".profile-buton");
// Add event listener to each button
["daily", "weekly", "monthly"].forEach(timeframe => {// loop through each timeframe
    document.getElementById(timeframe).addEventListener("click", function () {// add an event listener to the button
        getJsonData().then(data => {// get the data from the json file
            displayData(data, timeframe);// display the data with the timeframe

            // to update button styles
            buttons.forEach(btn => btn.style.color = ""); // Reset all buttons
            this.style.color = "white"; // Set active button color
            this.style.setProperty("color", "white", "important"); // Force important color
        });
    });
});

// set the default active button to weekly (weekly)
const defaultButton = document.getElementById("weekly");
defaultButton.style.color = "white";
defaultButton.style.setProperty("color", "white", "important"); // Force important color
getJsonData().then(data => displayData(data, "weekly"));// load it with the weekly data and display it

