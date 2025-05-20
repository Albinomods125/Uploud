const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'gerado.html'));
});



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});