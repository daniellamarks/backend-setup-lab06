import app from '../lib/app.js';
import supertest from 'supertest';
import creatureData from '../data/creatures.js';
const request = supertest(app);

console.log(creatureData)

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /data/creatures', async () => {

  const expected = creatureData

  const response = await request.get('/data/creatures');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});