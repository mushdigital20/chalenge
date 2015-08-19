should = require 'should'
request = require 'supertest'
assert = require('assert')

#describe 'api', ()->
url = 'http://localhost:3000'

	#api should be running
describe('connection'), ()->
	it('should be running'), (done)->

		request(url).get('/').end((error,response)->
			if(error)
				throw $rror

			response.should.have.status(200)
			
		)
