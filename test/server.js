const supertest = require('supertest'),
  should = require('should'),
  Server = require('../lib/server.js')

const server = new Server().server;

describe('GET /', function() {
  it('should response with 200', function(done) {
    supertest(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '27')
      .expect(200, done)
  })
})

describe('GET /hello', function() {
  it('should response with hello', function(done) {
    supertest(server)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '27')
      .expect(200, done)
  })
})
