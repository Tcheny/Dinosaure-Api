import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// POST
// Mise à jour des dinos
// route /app/dino/:id
// ============================
api.post('/:id', (req, res) => {
  Dino.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) return res.send(err);
    res.json({ message : 'Dino updated !'})
  });
});

export default api;
