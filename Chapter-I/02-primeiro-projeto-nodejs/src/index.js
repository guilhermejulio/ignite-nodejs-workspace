const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express ();
app.use(express.json());

const customers = [];
/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - como sendo  extrato (creditos e debitos, lançamentos) - []
 */
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: []
  });

  return response.send(201).send()

});


app.listen(2398, () => {
  console.log('Server start on port 2398! 🚀')
});