import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// DELETE
// Supprimer des dinos
// ============================
api.get('/delete/:id', (req, res) => {
  Dino.findByIdAndRemove(req.params.id, req.body, err => {
    if (err) return res.send(err);
    res.json({ message : 'Dino removed !'});
  });
});

export default api;
