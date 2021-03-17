const { request, response } = require('express');
const express = require('express');

const app = express ();

app.use(express.json());

app.listen(2398, () => {
  console.log('Server start on port 2398! 🚀')
});