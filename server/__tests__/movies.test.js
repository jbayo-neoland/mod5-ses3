const request = require('supertest')
const app = require('../app')

const mongoose = require("mongoose");
const databaseName = "mflix";

describe('Movies Endpoints', () => {

  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
  })

  describe('Movies', () => {
    it('GET /movies should fetch 10 movies', async (done) => {
      const res = await request(app)
        .get('/api/movies');

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('movies');
      expect(res.body.movies.length).toBe(10);
      done();
    })
  })

})
