const route = require('express').Router();
const controllerNotes = require('../controllers/note.controller');
const { validId, validObjectBody } = require('../middlewares/note.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all', controllerNotes.findAllNotesController);
route.get('/:id', validId, controllerNotes.findByIdNoteController);
route.post('/create', validObjectBody, controllerNotes.createNoteController);
route.put('/update/:id', validId, controllerNotes.updateNoteController);
route.delete('/delete/:id', validId, controllerNotes.deleteNoteController);

module.exports = route;
