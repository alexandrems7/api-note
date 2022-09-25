const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://admin:admin@api-note.sc6n2l7.mongodb.net/?retryWrites=true&w=majority', {
      //Esses campos evitam que a conexão tenha algum problema
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
