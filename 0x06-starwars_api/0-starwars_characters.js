#!/usr/bin/env node

const request = require('request');
const args = process.argv[2];

let res = [];

request(
  `https://swapi-api.alx-tools.com/api/films/${args}`,
  { json: true },
  function (error, response, body) {
    if (error) return error;
    res = body.characters;
    // console.log("body:", res); // Print the HTML for the Google homepage.

    // loop through the array
    // make an api call
    // get the name of every object
    res.map((item) => {
      return request(item, { json: true }, (error, response, body) => {
        if (error) return error;
        console.log(body.name);
      });
    });
  }
);
