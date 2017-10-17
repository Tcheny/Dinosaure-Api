import express from 'express';

// Main controller qui appelle les autres controllers
import getDino from './getDino';
import getAllDino from './getAllDino';
import postDino from './postDino';
import updateDino from './updateDino';
import deleteDino from './deleteDino';

const api = express.Router();

api.use(getDino);
api.use(getAllDino);
api.use(postDino);
api.use(updateDino);
api.use(deleteDino);

export default api;
