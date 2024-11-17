#!/usr/bin/env node

const request = require('request');
const args = process.argv[2];

function movieCharacters (id) {
  let res = [];

  request(
    `https://swapi-api.alx-tools.com/api/films/${id}`,
    { json: true },
    async function (error, response, body) {
      if (error) {
        console.log(error);
        return;
      }
      res = body.characters;

      // loop through the array
      // make an api call
      // get the name of every object
      for (const character of res) {
        await new Promise((resolve, reject) => {
          request(character, { json: true }, (error, response, body) => {
            if (error) {
              console.log(error);
              return;
            }
            console.log(body.name);
            resolve();
          });
        });
      }
    }
  );
}

movieCharacters(args);
