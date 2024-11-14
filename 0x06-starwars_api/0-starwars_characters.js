#!/usr/bin/node

const request = require('request');
const args = process.argv[2];

function movieCharacters (id) {
  let res = [];

  request(
    `https://swapi-api.alx-tools.com/api/films/${id}`,
    { json: true },
    function (error, response, body) {
      if (error) return error;
      res = body.characters;

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
}
movieCharacters(args);
