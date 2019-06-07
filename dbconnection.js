var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : global.gConfig.DB_HOST,
    user     : global.gConfig.DB_USER,
    password : global.gConfig.DB_PASSWORD,
    port     : global.gConfig.DB_PORT,
    database : global.gConfig.DB_DATABASE,
  });
  connection.connect(function(err){
     if(!err) {
         console.log("Database is connected ... \n\n");  
     } else {
         console.log("Error connecting database ... \n\n");  
     }
     });

module.exports = connection;