// Generated by CoffeeScript 1.9.3

/**
 * @author Pedro Mello (MushDigital)
 * @email: pedro@mushdigital.com
 * @Date:   2015-08-20
 * Mi9 Code Chalenge
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var host = process.env.YOUR_HOST || 'localhost';

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(error, request, response, next) {
  response.status(400).send({
    error: 'Could not decode request: JSON parsing failed'
  });
  response.end();
});

app.get('/', function(request, response) {
    response.send('API is running');
});

app.post('/', function(request, response) {
  var i, len, ref, selected, show;
  selected = [];
  ref = request.body.payload;
  for (i = 0, len = ref.length; i < len; i++) {
    show = ref[i];
    if (show.drm && parseInt(show.episodeCount) > 0) {
      selected.push({
        image: show.image.showImage,
        slug: show.slug,
        title: show.title
      });
    }
  }
  
  response.send({
    response: selected
  });
});

app.listen(port, host, function(err) {
  console.log("Server started on " + port);
});

module.exports = app;

