express = module.exports = require("express");
const bodyParser = require('body-parser');
expressValidator= module.exports = require('express-validator');
process.env.NODE_ENV = 'development';
// config variables
const config = require('./config/config.js');
var app = express();

app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', global.gConfig.REQUEST_FROM_URL );
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator());

var routes = require('./routes/routes');
app.use('/',routes); 

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
