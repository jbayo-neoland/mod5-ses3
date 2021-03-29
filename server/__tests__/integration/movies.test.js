const request = require('supertest')
const app = require('../../app')

const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + `/../../../.env` });

const dbHost = process.env.MONGO_DB_HOST || "localhost";
const dbName = process.env.MONGO_DB_DATABASE || "admin";
const dbPort = process.env.MONGO_DB_PORT || 27017;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWI5OWRiNGNmYTlhMzRkY2Q3ODg1YjYiLCJuYW1lIjoiTmVkIFN0YXJrIiwiZW1haWwiOiJzZWFuX2JlYW5AZ2FtZW9mdGhyb24uZXMiLCJpYXQiOjE2MTcwMzg4NTN9.E7TqjGccHI7wFl8pbCYF_W6Y67jeoRgO7OBEMpsNieg';
describe('Movies Endpoints', () => {

  beforeAll(async () => {
    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
  })

  describe('GET /movies ', () => {
    it('should fetch 10 movies', async (done) => {
      const res = await request(app)
      .get('/api/movies')
      .set('Authorization', 'Bearer ' + token);

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('movies');
      expect(res.body.movies.length).toBe(10);
      done();
    })

    it('should fetch 1 movie for country Aruba', async (done) => {
      const res = await request(app)
      .get('/api/movies?country=Aruba')
      .set('Authorization', 'Bearer ' + token)

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('movies');
      expect(res.body.movies.length).toBe(1);
      done();
    })
  })

})
