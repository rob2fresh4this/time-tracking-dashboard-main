// example of json data
// {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   },
//   {
//     "title": "Play",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 2
//       },
//       "weekly": {
//         "current": 10,
//         "previous": 8
//       },
//       "monthly": {
//         "current": 23,
//         "previous": 29
//       }
//     }
//   }

// example of card
/* <div class="cards id="work">
    <div class="card-top">
        <img src="./assets/images/icon-work.svg" alt="">
    </div>
    <div class="card-bottom">
        <div class="card-margin card-content">
            <div class="card-title">Work</div>
            <div class="card-title-hrs card-padding-fix" id="current">xhrs</div>
            <div class="card-lastweek">Last Week <span id="previous">- xhrs</span></div>
        </div>
    </div>
</div> */

let workData = document.getElementById("work");
let playData = document.getElementById("play");

function getJsonData() {
    return fetch("../data/data.json")
        .then(response => response.json())
        .then(data => {
            namesData = data.dataName; // Cache the fetched data (array of name objects)
            console.log(data);
            return data;
        });
} getJsonData()

function displayData(data) {
    
}