should 	= require 'should'
request = require 'supertest'
assert 	= require 'assert'
should 	= require 'should' 
have 	= require 'have' 

describe 'api', ()->
	url = 'http://localhost:3000'

	#api should be running
	describe 'connection', ->
		it 'should be running', (done)->

			request(url).get('/').end (error,response)->
				if(error)
					throw error

				response.status.should.be.exactly(200)
				done()
		it 'should return 400 and error when invalid jason', (done)->
			
			body = "{op-"

			request(url).post('/').end (error,response)->
				if(error)
					throw error

				response.status.should.be.exactly(400)
				done()
