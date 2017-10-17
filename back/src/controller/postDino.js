import express from 'express';

import Dino from '../model/dino';

const api = express.Router();

// POST
// Ajouter des dinos
// ============================
api.post('/add', (req,res)=>{
  let NewDino = new Dino (req.body);
  NewDino.save(err => {
    if(err) return res.redirect('http://localhost:3000/');
    res.redirect('http://localhost:3000/')
  });
});

export default api;
