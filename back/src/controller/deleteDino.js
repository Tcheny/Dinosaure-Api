import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// DELETE
// Supprimer des dinos
// route /app/dino/delete/:id
// ============================
api.get('/delete/:id', (req, res) => {
  Dino.findByIdAndRemove(req.params.id, req.body, err => {
    if (err) return res.send(err);
    res.redirect('http://localhost:3000/')
  });
});

export default api;
