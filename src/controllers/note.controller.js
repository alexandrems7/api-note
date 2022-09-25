const notesService = require('../services/note.service');
const mongoose = require('mongoose');

const findAllNotesController = async (req, res) => {
  const allNotes = await notesService.findAllNotesService();
  res.send(allNotes);
};

const findByIdNoteController = async (req, res) => {
  const idParam = req.params.id;

  const note = await notesService.findByIdNoteService(idParam);
  res.send(note);
};

const createNoteController = async (req, res) => {
  const note = req.body;

  const newNote = await notesService.createNoteService(note);
  res.send(newNote);
};

const updateNoteController = async (req, res) => {
  const idParam = req.params.id;

  const noteEdited = req.body;

  const updateNote = await notesService.updateNoteService(idParam, noteEdited);
  res.send(updateNote);
};

const deleteNoteController = async (req, res) => {
  const idParam = req.params.id;

  await notesService.deleteNoteService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllNotesController,
  findByIdNoteController,
  createNoteController,
  updateNoteController,
  deleteNoteController,
};
