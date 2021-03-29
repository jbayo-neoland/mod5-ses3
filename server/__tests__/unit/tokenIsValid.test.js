const tokenIsValid = require('../../middlewares/tokenIsValid');
const jwt = require('jsonwebtoken');

const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + `/../../../.env` });

const dbHost = process.env.MONGO_DB_HOST || "localhost";
const dbName = process.env.MONGO_DB_DATABASE || "admin";
const dbPort = process.env.MONGO_DB_PORT || 27017;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWI5OWRiNGNmYTlhMzRkY2Q3ODg1YjYiLCJuYW1lIjoiTmVkIFN0YXJrIiwiZW1haWwiOiJzZWFuX2JlYW5AZ2FtZW9mdGhyb24uZXMiLCJpYXQiOjE2MTcwMzg4NTN9.E7TqjGccHI7wFl8pbCYF_W6Y67jeoRgO7OBEMpsNieg';


describe('middleware tokenIsValid', () => {
  beforeAll(async () => {
    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close()
  })

  describe('should call once next', () => {
    it('with no headers', () => {
      let nextFunction = jest.fn();
      tokenIsValid({headers: {}}, {}, nextFunction);
      expect(nextFunction).toBeCalledTimes(1);
    })
    it('without headers and needsAuth false', () => {
      let nextFunction = jest.fn();
      tokenIsValid({needsAuth: false, headers: {}}, {}, nextFunction);
      expect(nextFunction).toBeCalledTimes(1);
    })
    it('without headers and needsAuth true', () => {
      let nextFunction = jest.fn();
      tokenIsValid({needsAuth: true, headers: {}}, {}, nextFunction);
      expect(nextFunction).toBeCalledTimes(1);
    })
    it('with authorization header and needsAuth true', () => {
      let nextFunction = jest.fn();
      tokenIsValid({needsAuth: true, headers: {authorization: 'Bearer ' + token}}, {}, nextFunction);
      expect(nextFunction).toBeCalledTimes(1);
    })
  })

  describe('calls to jwt.verify', () => {
    it('should call jwt.verify when having authorization bearer', () => {
      let nextFunction = jest.fn();
      const spyJwt = jest.spyOn(jwt, 'verify');
      tokenIsValid({needsAuth: true, headers: {authorization: 'Bearer ' + token}}, {}, nextFunction);

      expect(spyJwt).toHaveBeenCalled();
      // spyJwt.mock.calls[<numero_para_identificar_la_vez_que_se_ha_llamado>][<posicion_del_argumento_en_la_lista_de_args>]
      expect(spyJwt.mock.calls[0][0]).toEqual(token);

      tokenIsValid({needsAuth: true, headers: {authorization: 'Bearer ' + 'token'}}, {}, nextFunction);
      expect(spyJwt.mock.calls[1][0]).toEqual('token');

    })
    it('should write req.decodedToken with a valid token', () => {
      let nextFunction = jest.fn();
      const spyJwt = jest.spyOn(jwt, 'verify');
      let req = {needsAuth: true, headers: {authorization: 'Bearer ' + token}};
      tokenIsValid(req, {}, nextFunction);

      expect(spyJwt).toHaveBeenCalled();
      // spyJwt.mock.calls[<numero_para_identificar_la_vez_que_se_ha_llamado>][<posicion_del_argumento_en_la_lista_de_args>]
      expect(spyJwt.mock.calls[0][0]).toEqual(token);

      expect(req).toHaveProperty('decodedToken');

    })
  })


})
