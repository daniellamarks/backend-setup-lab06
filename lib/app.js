import express from 'express';
import cors from 'cors';
import creaturesData from '../data/creatures.js';
// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World!');
});
// example route to see if app is alive!
app.get('/data/creaturesData', (req, res) => {
  res.json(creaturesData);
});

app.get('/data/creaturesData/name', (req, res) => {
  res.json(creaturesData[0]);
});

export default app;