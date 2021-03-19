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

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if(customerAlreadyExists){
    return response.status(400).json({ error: "Customer already exists"});
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.send(201).send()

});


app.listen(2398, () => {
  console.log('Server start on port 2398! 🚀')
});