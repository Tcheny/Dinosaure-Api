import express from 'express'; // middleware express
import bodyParser from 'body-parser'; // middleware bodyParser pour parser urlencoded
import cors from 'cors'; // middleware cors

import config from './config/config'; // config pour le port 3005
import route from './route/route'; // route

const app = express();

// Parse le formulaire 'urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));
// Utilise cors
app.use(cors());
// Utilise la route '/app...' puis appelle les autres routes du controller
app.use('/app', route);

// Lance le server
app.listen(config.port,()=>{
  console.log(`Server is listening on port ${config.port}`);
});

export default app;
