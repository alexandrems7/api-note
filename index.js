const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/note.route')
const app = express();
const connectToDatabase = require('./src/database/database')

const port = 3001;

app.use(express.json());
connectToDatabase();
app.use(cors());
app.use('/notes', routes);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


