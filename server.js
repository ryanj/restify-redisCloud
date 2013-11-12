var config = require ('config'),
    restify     = require('restify'),
    fs          = require('fs')

var redis = require("redis")
if(typeof(config.redisCloud.host) !== "undefined"){
  var client = redis.createClient(
      config.redisCloud.port, 
      config.redisCloud.host, { 
        auth_pass: config.redisCloud.password 
  });
}

var app = restify.createServer()

app.use(restify.queryParser())
app.use(restify.CORS())
app.use(restify.fullResponse())

// Routes
app.get('/set', function (req, res, next){
  var result = client.set({'welcome_msg': "Hello World"};
  res.send(result);
});
app.get('/get', function (req, res, next){
  var result = client.get('welcome_msg');
  res.send(result);
});
app.get('/info', function (req, res, next){
  var result = client.server_info;
  res.send(result);
});
app.get('/flush', function (req, res, next){
  var result = client.flushall();
  res.send(result);
});

app.get('/status', function (req, res, next)
{
  res.send("{status: 'ok'}");
});

app.get('/', function (req, res, next)
{
  var data = fs.readFileSync(__dirname + '/index.html');
  res.status(200);
  res.header('Content-Type', 'text/html');
  res.end(data.toString().replace(/host:port/g, req.header('Host')));
});

app.get(/\/(css|js|img)\/?.*/, restify.serveStatic({directory: './static/'}));

app.listen(config.port, config.ip, function () {
  console.log( "Listening on " + config.ip + ", port " + config.port )
});
