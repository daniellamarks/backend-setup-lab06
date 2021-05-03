import express from 'express';
import cors from 'cors';
import creaturesData from '../data/creatures.js';
// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/data/creatures', (req, res) => {
  res.json(creaturesData);
});




export default app;