const myURL = "https://api.tvmaze.com/search/shows?q=girls";
let myObject;

// Fetching Data from URL
fetch(myURL)
    .then(response => response.json())
    .then(json => {myObject = json;
    updateData();})

// Selecting div
function updateData(){
    // <div id="apiData"></div>

    console.log(myObject)
    let apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML = "<h2>Assignment 2</h2>";

    // new div for level One
    let divLevelOne = document.createElement("DIV");
    divLevelOne.setAttribute("id", "levelOne");
    apiDataDiv.appendChild(divLevelOne);

    let levelOne  = document.getElementById('levelOne');
    levelOne.innerHTML = "<h3>Level One Data Retrieved </h3>";
    levelOne.innerHTML += `<ul>`;
    myObject.forEach(element => {
        levelOne.innerHTML += `<li> Score Property: ${element.score}</li>`
    });
    levelOne.innerHTML += `</ul>`;

    // new div for level Two
    let divLevelTwo = document.createElement("div");
    divLevelTwo.setAttribute("id","levelTwo");
    apiDataDiv.appendChild(divLevelTwo);

    let levelTwo = document.getElementById ('levelTwo');
    levelTwo.innerHTML = `<h3>Level Two Data Retrieved</h3>`
    levelTwo.innerHTML += "<ul>";
    myObject.forEach(element => {
        levelTwo.innerHTML += `<li>Show id Property: ${element.show.id}</li>`;
    });
    levelTwo.innerHTML += '</ul>';

    // new div for level Three
    let divLevelThree = document.createElement("div");
    divLevelThree.setAttribute("id", "levelThree");
    apiDataDiv.appendChild(divLevelThree);

    let levelThree = document.getElementById('levelThree');
    levelThree.innerHTML = `<h3>Level Three Data Retrieved</h3>`;
    levelThree.innerHTML += `<ul>`;
    myObject.forEach(element => {
        // Getting genres
        levelThree.innerHTML += `<li> Generes Property: ${element.show.genres}</li>`;
    });
    levelThree.innerHTML += `</ul>`;

    // new div for level Four
    let divLevelFour = document.createElement("div");
    divLevelFour.setAttribute("id", "levelFour");
    apiDataDiv.appendChild(divLevelFour);

    let levelFour = document.getElementById('levelFour');
    levelFour.innerHTML = `<h3>Level Four Data Retrieved</h3>`;
    levelFour.innerHTML += `<ul>`;
    myObject.forEach(element => {
        // Getting Network Name
        if(element.show.externals && element.show.externals.imdb) {
            levelFour.innerHTML += `<li> imdb Property: ${element.show.externals.imdb}</li>`;
        } else {
            levelFour.innerHTML += `<li> imdb Property: Not Available</li>`;
        }
    });
    levelFour.innerHTML += `</ul>`;

    // new div for level Five
    let divLevelFive = document.createElement('div');
    divLevelFive.setAttribute("id", "levelFive");
    apiDataDiv.appendChild(divLevelFive);

    let levelFive = document.getElementById('levelFive');
    levelFive.innerHTML = `<h3>Level Five Data Retrieved</h3>`;
    levelFive.innerHTML += `<ul>`
    myObject.forEach(element => {
        // Getting Country Name
        if (element.show.network && element.show.network.id) {
            levelFive.innerHTML += `<li> Country Names Property: ${element.show.network.id}</li>`;
        } else {
            levelFive.innerHTML += `<li> Country Names Property: Not Available</li>`;
        }
    });
    levelFive.innerHTML += `</ul>`
}