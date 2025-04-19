const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const path_ = path.join(__dirname)

// 
app.use(express.static(path.join(__dirname)));

// Rota para acessar diretamente a página
app.get('/', (req, res) => {
  res.sendFile(`${path_}/game.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
