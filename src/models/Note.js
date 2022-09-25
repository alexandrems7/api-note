const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        require: true,
    },
    completed: {
        type: String,
        require: true,
    },
    levelOfImportance: {
        type: String,
        require: true,
    },
  })

  const Note = mongoose.model('notes', noteSchema)

  module.exports = Note;
