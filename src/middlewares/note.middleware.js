const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
 
  next();
};

const validObjectBody = (req, res, next) => {
  const note = req.body;

  if (
    !note ||
    !note.name ||
    !note.duration ||
    !note.completed ||
    !note.levelOfImportance
  ) {
    return res.status(400).send({ message: 'Envie todos os dados da nota' });
  }

  next();
};


module.exports = {
  validId,
  validObjectBody,
};
