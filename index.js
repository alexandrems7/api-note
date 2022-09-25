require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/note.route');
const port = process.env.PORT || 3001;
const app = express();
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/notes', routes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
