import mongoose from 'mongoose'; // middleware mongoose
import express from 'express'; // middleware express

import config from '../config/config'; // config pour mongoUrl
import controller from '../controller/main'; // route du controller

const router = express.Router(); // Router de express

// Connection à la DB
mongoose.connect(config.mongoUrl, ()=>{
  console.log(`DB is running...`)
});

// route /app/dino/ puis les routes des controllers
router.use('/dino', controller);

export default router;
