 
const Notes = require('../models/Note');


const findAllNotesService = async () => {
  const allNotes = await Notes.find();
  return allNotes;

};

const findByIdNoteService = async (idParam) => {
  const note = await Notes.findById(idParam)
  return note;
};

const createNoteService = async (newNote) => {
const noteCreated = await Notes.create(newNote)
  return noteCreated;
};

const updateNoteService = async (id, noteEdited) => {
   const noteUpdated = await Notes.findByIdAndUpdate(id, noteEdited)
  return noteUpdated;

};

const deleteNoteService = async (idNote) => {
 return await Notes.findByIdAndDelete(idNote)
};

module.exports = {
  findAllNotesService,
  findByIdNoteService,
  createNoteService,
  updateNoteService,
  deleteNoteService,
};
