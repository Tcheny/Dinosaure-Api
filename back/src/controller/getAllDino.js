import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// GET
// Récupérer tous les dinos
// route /app/dino/
// ============================
api.get('/', (req,res) => {
  Dino.find({}, (err, dino)=> {
    if (err) return res.send(err);
    res.json(dino);
  });
});

export default api;
