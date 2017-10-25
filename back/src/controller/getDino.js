import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// GET
// Récupérer un dino par ID
// route /app/dino/:id
// ============================
api.get('/:id', (req, res) => {
  Dino.findById(req.params.id, (err, dino) => {
    if (err) return res.send(err);
    res.json(dino)
  });
});

export default api;
