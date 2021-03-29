const {getMovies} = require('../../controllers/movies.controller');

const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + `/../../../.env` });

const dbHost = process.env.MONGO_DB_HOST || "localhost";
const dbName = process.env.MONGO_DB_DATABASE || "admin";
const dbPort = process.env.MONGO_DB_PORT || 27017;

describe('movies controller', () => {
  beforeAll(async () => {
    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
  })

  describe('getMovies', () => {

    it('should call res.json', async () => {
      req = {query: {}};
      res = {json: jest.fn()};
      next = jest.fn();

      res.json.mockReturnValueOnce({movies: []});

      await getMovies(req, res, next);
      expect(res.json()).hasOwnProperty('movies');
    })

  })
})
