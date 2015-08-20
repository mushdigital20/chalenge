
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var should = require('should');
var request = require('supertest');
var should = require('should');

describe('api', function() {
  var url = 'https://pedro-mi9-chalenge.herokuapp.com';
  describe('connection', function() {
    it('should be running', function(done){
      
      request(url)
      .get('/')
      .end(function(error, response) {
        if (error) {
          throw error;
        }
        response.status.should.be.exactly(200);
        done();
      });
    });
    
    it('should return 200 and error when valid jason', function(done) {
      var body = require('./valid.json');

      request(url)
      .post('/')
      .send(body)
      .end(function(error, response) {
        if (error) {
          console.log(error.message)
        }
        response.status.should.be.exactly(200);
        done();  
        
      });
    });

    it('should return 400 and error when valid jason', function(done) {
      var body = '{"payload": [{"country": "UK","description": "Whats life like when you have enough children to field your own football team?","drm": true,"episodeCount": 3, "genre": "Reality",';

      request(url)
      .post('/')
      .send(body)
      .end(function(error, response) {
        if (error) {
          console.log(error.message)
        }
        response.status.should.be.exactly(400);
        done();  
        
      });
    });
  });
});
