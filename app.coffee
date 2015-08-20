###*
 * @author Pedro Mello (MushDigital)
 * @email: pedro@mushdigital.com
 * @Date:   2015-08-20
 * Mi9 Code Chalenge
###
express 		= require('express')
bodyParser		= require('body-parser')

app = express()

#Body Parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

#error handling
app.use (error, request, response, next)->
  response.status(400).send({ error: 'Could not decode request: JSON parsing failed' });
  response.end()

#Routes
app.get '/',(request, response) ->
		response.send 'API is running'
	
app.post '/',(request, response) ->

	selected = []
	for show in request.body.payload
		#only results with drm = true and episodeCount > 0
		if show.drm and parseInt(show.episodeCount) > 0
			selected.push {
				image:show.image.showImage
				slug:show.slug
				title:show.title
			}

	response.send {response:selected}

#server settings
port = process.env.PORT || 3000
host = process.env.YOUR_HOST || 'localhost'

app.listen(port, host, ()->
	console.log "Server started on #{port}"
)

module.exports = app
