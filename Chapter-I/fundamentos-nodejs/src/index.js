const { request, response } = require('express');
const express = require('express');

const app = express ();

app.get('/', (request, response) => {
  return response.json({
    messsage: 'Helo World Ignite!'
  });
})

app.listen(2398);