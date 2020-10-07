import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

for (let i = 0; i < fifaData.length; i++) {
    if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final') {
        console.log(fifaData[i]["Home Team Name"]);
        console.log(fifaData[i]["Away Team Name"]);
        console.log(fifaData[i]["Home Team Goals"]);
        console.log(fifaData[i]["Away Team Goals"]);
        if (fifaData[i]["Home Team Goals"] > fifaData[i]["Away Team Goals"]) {
            console.log(fifaData[i]["Home Team Name"]);
        } else {
            console.log(fifaData[i]["Away Team Name"])
        }
    }
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let newArray = data.filter(function(game) {
        return game.Stage === 'Final';
    })
    return newArray;

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data,cb) {

    let years = cb(data).map(function(game) {
        return game.Year;
    });
    return years;
};

console.log(getYears(fifaData,getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data,cb) {

    let finals = cb(data);
    let winners = [];
    for (let i = 0; i < finals.length; i++) {
        if (finals[i]['Home Team Goals'] > finals[i]['Away Team Goals']) {
            winners.push({
                teamName: finals[i]['Home Team Name'],
                year: finals[i].Year
            });
        } else {
            winners.push({
                teamName: finals[i]['Away Team Name'],
                year: finals[i].Year
            });
        }
    }
    return winners;
};

console.log(getWinners(fifaData,getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1,cb2) {
    let winners = cb1(fifaData, getFinals);
    // let years = cb2(fifaData);
    winners.forEach(function(e) {
        console.log(`In ${e.teamName},${e.year} won the world cup!`)
    });
};

console.log(getWinnersByYear(getWinners,getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let totalMatches = data.length;    
    let totalHomeGoals = data.reduce(function(acc,cv) {
         return acc += cv["Home Team Goals"];
        },0)
    let totalAwayGoals = data.reduce(function(acc,cv) {
            return acc += cv["Away Team Goals"];
           },0)
    let totalGoals = totalHomeGoals + totalAwayGoals
    return totalGoals / totalMatches;
    };

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,init) {


};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
