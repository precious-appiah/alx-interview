#!/usr/bin/node

const request = require("request");
const args = process.argv[2];

let res = [];

request(
  `https://swapi-api.alx-tools.com/api/films/${args}`,
  { json: true },
  function (error, response, body) {
    res = body.characters;
    // console.log("body:", res); // Print the HTML for the Google homepage.

    //loop through the array
    //make an api call
    //get the name of every object
    const names = res.map((item) => {
      request(item, { json: true }, (error, response, body) => {
        console.log(body.name);
      });
    });
  }
);
